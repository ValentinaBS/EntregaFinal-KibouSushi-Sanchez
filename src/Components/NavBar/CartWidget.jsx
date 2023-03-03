import React from 'react'
import { FaShoppingBag } from 'react-icons/fa'

function CartWidget() {
    return (
        <div className='cart__widget'>
            <FaShoppingBag className='nav__cart__button'/>
            <span className='cart__quantity'>5</span>
        </div>
    )
}

export default CartWidget