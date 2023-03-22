import { FaLeaf } from 'react-icons/fa';
import { Link } from "react-router-dom"

export default function Item({item : {id, img, name, shortDescription, price, pieces, stock, isPremium, isVegetarian}}) {
    return (
        <section className='item__cards'>
            <img 
                src={`../images/products/${img}`} 
                alt={`${name} sushi`} 
                className='item__cards__img'
            />
            <div className='item__cards__title'>
                    <h1>
                        {name}
                    </h1>
                    <img 
                        src={isPremium ? 
                            '../images/premium-icon.svg' 
                            : '../images/regular-icon.svg'}
                        alt={isPremium ? 
                            'Premium sushi icon' 
                            : 'Regular sushi icon'}
                        className='item__cards__icon'
                    />
                    {isVegetarian 
                    ? <FaLeaf className='item__cards__icon' />
                    : ''}
            </div>
                <p className='item__cards__ingredients'>
                    {shortDescription}
                </p>
                <div className='item__cards__quantity'>
                    <h2 className='item__cards__price'>
                        ${price}
                    </h2>
                    <p className='item__cards__pieces'>
                        {pieces} pieces
                    </p>
                    <p className='item__cards__stock'>
                        In stock: {stock}
                    </p>
                </div>
                <Link to={`/item/${id}`}>
                    <button className='item__cards__button'>
                        Show Details
                    </button>
                </Link>
        </section>
    )
}