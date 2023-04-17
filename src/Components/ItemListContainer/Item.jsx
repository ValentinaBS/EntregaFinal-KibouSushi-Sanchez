import { FaLeaf } from 'react-icons/fa';
import { Link } from "react-router-dom"

export default function Item({item : {id, img, name, shortDescription, price, pieces, stock, isPremium, isVegetarian}}) {
    return (
        <section className='item__cards'>
            <img 
                src={img}
                alt={`${name} sushi`} 
                className='item__cards__img'
            />
            <div className='item__cards__title'>
                    <h1>
                        {name}
                    </h1>
                    <img 
                        src={isPremium ? 
                            'https://firebasestorage.googleapis.com/v0/b/kibou-sushi-ecommerce.appspot.com/o/premium-icon.svg?alt=media&token=4bb5b07a-048f-4019-ab1f-b7fd233e9564' 
                            : 'https://firebasestorage.googleapis.com/v0/b/kibou-sushi-ecommerce.appspot.com/o/regular-icon.svg?alt=media&token=ac862a26-edb4-447b-9251-e327c410a8bf'}
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
                        ${price.toFixed(2)}
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