import React from 'react'
import { useStateValue } from '../context/StateProvider'
import './CheckoutProduct.css'
const CheckoutProduct = ({ id, title, image, rating, price }) => {
    const [{ basket }, dispatch] = useStateValue()
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id
        })
    }
    return (
        <div className='checkoutproduct'>
            <img src={image} alt="product" />
            <div className="checkoutproduct_info">
                <p className='checkoutproduct_title'>{title}</p>
                <p className='checkoutproduct_price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='checkoutproduct_rating'>
                    {Array(rating).fill().map((_, i) =>
                        <p>*</p>
                    )}
                </div>
            </div>
            <button onClick={removeFromBasket}>Remove From Cart</button>
        </div>
    )
}

export default CheckoutProduct
