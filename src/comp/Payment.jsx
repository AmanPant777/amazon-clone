import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../context/StateProvider'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../context/reducer'
import { useState, useEffect } from 'react'
import axios from './axios'
import { useHistory } from 'react-router-dom'
import { db } from '../firebase'

const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue()
    const history = useHistory()
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState(null)
    const [processing, setProcessing] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)
    const [succeded, setSucceded] = useState(false)
    useEffect(() => {
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${getBasketTotal(basket) * 100}`
            })
            setClientSecret(response.data.clientSecret)
        }
        getClientSecret();
    }, [basket])
    const handleSubmit = async (event) => {
        event.preventDefault()
        setProcessing(true)
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: { card: elements.getElement(CardElement) }
        }).then(({ paymentIntent }) => {
            db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
                basket: basket,
                amount: paymentIntent.amount,
                created: paymentIntent.created
            })
            setSucceded(true)
            setError(null)
            setProcessing(false)
            dispatch({
                type: 'EMPTY_BASKET'
            })
            history.replace('/orders')
        })
    }
    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : '')
    }
    return (
        <div className="payment">
            <div className="payment_container">
                <h1>Checkout <Link to='/checkout'>{basket?.length} ,items</Link></h1>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Delivery Address</h3>
                    </div>
                    <div className="payment_address">
                        <p>121 Kamal Printing Press</p>
                        <p>Clement Town</p>
                        <p>Dehradun</p>
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Review Orders and Delivery</h3>
                    </div>
                    <div className="payment_items">
                        {basket.map(item => <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            rating={item.rating}
                            price={item.price}
                        />)}
                    </div>
                </div>
                <div className="payment_section">
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment_priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => {
                                        return (
                                            <>
                                                <h4>SubTotal ({basket?.length} items)<strong>{value}</strong></h4>

                                            </>
                                        )
                                    }}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={'$'}
                                />
                                <button disabled={processing || disabled || succeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {error && <h4>{error}</h4>}
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
