import './ItemDetailContainer.css';
import ItemCount from './ItemCount';
import { Link } from 'react-router-dom';
import { FaLeaf, FaAngleLeft } from 'react-icons/fa';

export default function ItemDetail({ item: {name, img, longDescription, pieces, price, stock, isPremium, isVegetarian} }) {
    
    function handleOnAdd(quantity) {
        console.log(`You added: ${quantity} ${name} Rolls to the cart`)
    }
    
    return (
        <section className='detail'>
            <img 
                src={`../images/products/${img}`} 
                alt={`${name} sushi`}
                className='detail__img' 
            />
            <div>
                <div className='detail__description'>
                    <div className="detail__description__title">
                        <h1 className='detail__title'>
                            {name}
                        </h1>
                        <img className='detail__icon'
                            src={isPremium ? 
                                '../images/premium-icon.svg' 
                                : '../images/regular-icon.svg'}
                            alt={isPremium ? 
                                'Premium sushi icon' 
                                : 'Regular sushi icon'}
                            />
                            {isVegetarian 
                            ? <FaLeaf className='detail__icon'/>
                            : ''}
                    </div>
                    <div className='detail__information'>
                        <p>
                            {longDescription}
                        </p>
                        <p>
                            Each order comes with {pieces} pieces of sushi, perfect for sharing or enjoying as a meal!
                        </p>
                        <p>
                            At Kibou, we take pride in using only the <span className='bold'>freshest and highest quality</span> ingredients in our sushi dishes.
                        </p>
                        <p>
                        Order now and experience the delicious flavors of our <span className='bold'>{name} Roll</span>!
                        </p>
                    </div>
                    <div className='detail__quantity'>
                        <h2 className='detail__price'>
                            ${price}
                        </h2>
                        <p className='detail__pieces'>
                            {pieces} pieces
                        </p>
                        <p className='detail__stock'>
                            In stock: {stock}
                        </p>
                    </div>
                </div>
                {stock > 0 
                ? <ItemCount
                    stock={stock} 
                    onAdd={handleOnAdd} /> 
                :   <p className='detail__empty__stock'>
                        You can't buy this item right now. Come back later and see if we have stock!
                    </p>}
                <Link to='/'>
                    <button className='detail__home__button'>
                        <FaAngleLeft className='detail__home__icon'/>
                        Browse other dishes
                    </button>
                </Link>
            </div>
        </section>
    )
}
