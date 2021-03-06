import React from 'react'
import moment from 'moment'
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format'
import { useStateValue } from '../context/StateProvider'
const Order = ({ order }) => {
    return (
        <div className="order">
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format('MMMM Do YYYY,h:mma')}</p>
            <p className="order_id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <CheckoutProduct
                    id={item.id}
                    title={item.title}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}
                    hidebutton />
            ))}
            <CurrencyFormat
                renderText={(value) => {
                    return (
                        <h3 className="order__total">Order Total: {value}</h3>
                    )
                }}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />

        </div>
    )
}
export default Order
