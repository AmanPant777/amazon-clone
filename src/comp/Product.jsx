import React from 'react'
import { useStateValue } from '../context/StateProvider'
import './Product.css'
const Product = ({ id, title, image, price, rating }) => {
    const [{ basket }, dispatch] = useStateValue();
    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }
    return (
        <div className="product" key={id}>
            <div className="product_info">
                <p>{title}</p>
                <p>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product_rating'>
                    {Array(rating).fill().map((_, i) => (
                        <p>*</p>
                    ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add To Basket</button>
        </div>
    )
}
export default Product
