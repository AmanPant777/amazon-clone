import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutProduct from './CheckoutProduct'
import { useStateValue } from '../context/StateProvider'
const Checkout = () => {
    const [{ basket, user }, dispatch] = useStateValue()
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="images/banner2.jpg" alt="banner" className="checkout_ad" />
                <div className='checkout_title'>
                    <h3>Hello {user?.email}</h3>
                    <h2>Your Shopping Basket</h2>
                    {basket.map(item =>
                        <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            price={item.price}
                            image={item.image}
                            rating={item.rating} />
                    )}
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
