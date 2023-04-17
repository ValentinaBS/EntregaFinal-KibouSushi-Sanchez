import { useCartContext } from '../../Context/CartContext';
import { FaShoppingBag } from 'react-icons/fa'

function CartWidget() {
    const { getItemQuantity } = useCartContext()

    return (
        <div className='cart__widget'>
            <FaShoppingBag className='nav__cart__button'/>
            {getItemQuantity() > 0 && 
                <span className='cart__quantity'>
                    {getItemQuantity()}
                </span>
            }
        </div>
    )
}

export default CartWidget