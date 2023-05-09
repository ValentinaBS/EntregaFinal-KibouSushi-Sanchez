import { Link } from 'react-router-dom';
import './Cart.css';
import { useCartContext } from '../../Context/CartContext';
import { FaArrowLeft, FaLeaf, FaTrash, FaBoxOpen, FaAngleRight } from 'react-icons/fa';

export default function Cart() {
    const { cartList, deleteItem, getTotalPrice, getItemQuantity, clearCartList } = useCartContext()

    return (
        <section className='cart'>
            <div className='cart__head'>
                <Link to={-1}>
                    <FaArrowLeft className='cart__head__back'/>
                </Link>
                <h1 className='cart__head__title'>
                    Shopping Cart
                </h1>
            </div>
            <p className='cart__items__number'>
                {getItemQuantity()}
                {getItemQuantity() === 1 
                ? ' item'
                : ' items'
                }
            </p>
            {
                cartList.map(it => {
                    return(
                    <div className='cart__item' key={it.id}>
                        <img 
                            src={it.img}
                            alt={`${it.name} sushi`}
                            className='cart__item__img' 
                        />
                        <div className='cart__item__description'>
                            <div>
                                <div className='cart__item__head'>
                                    <h2 className='cart__item__name'>
                                        {it.name}
                                    </h2>
                                    <img className='cart__item__icon'
                                        src={it.isPremium ? 
                                            'https://firebasestorage.googleapis.com/v0/b/kibou-sushi-ecommerce.appspot.com/o/premium-icon.svg?alt=media&token=4bb5b07a-048f-4019-ab1f-b7fd233e9564' 
                                            : 'https://firebasestorage.googleapis.com/v0/b/kibou-sushi-ecommerce.appspot.com/o/regular-icon.svg?alt=media&token=ac862a26-edb4-447b-9251-e327c410a8bf'}
                                        alt={it.isPremium ? 
                                            'Premium sushi icon' 
                                            : 'Regular sushi icon'}
                                    />
                                    {it.isVegetarian 
                                        ? <FaLeaf className='cart__item__icon'/>
                                        : ''}
                                </div>
                                <div className='cart__item__price'>
                                    <p>
                                        Price: ${it.price}
                                    </p>
                                    <p>
                                        Sub-total: ${it.price * it.quantity}
                                    </p>
                                </div>
                            </div>
                            <div className='cart__units'>
                                <div>
                                    <p className='cart__item__pieces'>
                                        {it.pieces * it.quantity} pieces
                                    </p>
                                    <p className='cart__units__quantity'>
                                        x{it.quantity} rolls
                                    </p>
                                </div>
                                <button onClick={() => deleteItem(it.id)} className='cart__units__button'>
                                    <FaTrash />
                                </button>
                            </div>
                        </div>
                    </div>
                    )
                })
            }
            {
                cartList.length === 0 
                ?  <div className='cart__empty'>
                    <h3>Your cart is empty</h3>
                    <Link to='/all'>
                        <button>
                            Browse Our Menu
                        </button>
                    </Link>
                    </div>
                :   <>
                        <div className='cart__price'>
                            <p>
                                Sub-total:
                            </p>
                            <p>
                                ${getTotalPrice().toFixed(2)}
                            </p>
                            <p>
                                Delivery Fees:
                            </p>
                            <p>
                                $2.30
                            </p>
                            <h3>
                                Total Amount:
                            </h3>
                            <p className='cart__price__total'>
                                ${(getTotalPrice() + 2.30).toFixed(2)}
                            </p>
                        </div>
                        <div className='cart__buttons'>
                            <button className='cart__clear__button' onClick={() => clearCartList()}>
                                Clear Cart
                                <FaBoxOpen 
                                className='cart__clear__icon'/>
                            </button>
                            <Link to='/checkout'>
                                <button className='cart__checkout__button'>
                                    Go to Checkout
                                    <FaAngleRight 
                                    className='cart__checkout__icon'/>
                                </button>
                            </Link>
                        </div>
                    </>
        }
        </section>
    )
}
