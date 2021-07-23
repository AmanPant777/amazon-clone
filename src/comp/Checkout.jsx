import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
const Checkout = () => {
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img src="images/banner2.jpg" alt="banner" className="checkout_ad" />
                <div className='checkout_title'>
                    <h2>Your Shopping Basket</h2>
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout
