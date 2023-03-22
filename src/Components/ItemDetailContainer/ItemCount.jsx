import { FaPlus, FaMinus, FaShoppingCart } from 'react-icons/fa'
import { useState } from 'react'

export default function ItemCount({ stock, onAdd }) {
    const [count, setCount] = useState(1)

    function add() {
        if (count < stock) {
            setCount(prev => prev + 1)
        }
    }

    function subtract() {
        if (count > 1) {
            setCount(prev => prev - 1)
        }
    }

    return (
        <div className='detail__units'>
            <button 
            className='detail__units__button'
            onClick={subtract}
            >
                <FaMinus />
            </button>
            <p className='detail__units__quantity'>
                {count}
            </p>
            <button 
            className='detail__units__button'
            onClick={add}
            >
                <FaPlus />
            </button>
            <button 
                className='detail__units__button detail__add'
                onClick={()=> onAdd(count)} disabled={count===0}
            >
                <FaShoppingCart className='detail__cart__icon'/>
                <span className='detail__button__text'>
                    Add to Cart
                </span>
            </button>
        </div>
    )
}
