import React from 'react'
import './Product.css'
const Product = ({ id, title, image, price, rating }) => {
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
            <button>Add To Basket</button>
        </div>
    )
}
export default Product
