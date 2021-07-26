import React from 'react'
import { Link } from 'react-router-dom'
import { useStateValue } from '../context/StateProvider'
import CheckoutProduct from './CheckoutProduct'
import './Payment.css'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import CurrencyFormat from 'react-currency-format'
import { getBasketTotal } from '../context/reducer'
import { useState } from 'react'
const Payment = () => {
    const [{ basket, user }, dispatch] = useStateValue()
    const stripe = useStripe()
    const elements = useElements()
    const [error, setError] = useState(null)
    const [processing, setProcessing] = useState('')
    const [disabled, setDisabled] = useState(true)
    const [clientSecret, setClientSecret] = useState(true)
    const [succeded, setSucceded] = useState(false)

    const handleSubmit = (e) => {

    }
    const handleChange = (e) => {

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
                                                <p>SubTotal ({basket?.length} items)<strong>{value}</strong></p>
                                                <small className='subtotal_gift'>
                                                    <input type="checkbox" />
                                                    This order contains a gift
                                                </small>
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
                        </form>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
