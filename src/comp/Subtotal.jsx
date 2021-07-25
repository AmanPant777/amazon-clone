import React from 'react'
import CurrencyFormat from 'react-currency-format';
import "./Subtotal.css"
import { useStateValue } from '../context/StateProvider'
import { getBasketTotal } from '../context/reducer'
import { useHistory } from 'react-router-dom'
const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue()
    const history = useHistory()
    return (
        <div className="subtotal">
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
            <button onClick={(e) => history.push('/payment')}>Proceed To Checkout</button>
        </div>
    )
}

export default Subtotal;
