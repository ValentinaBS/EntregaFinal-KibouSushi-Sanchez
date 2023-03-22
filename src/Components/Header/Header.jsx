import './Header.css';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

export default function Header() {
    return (
        <header className='header' id='home'>
            <img 
                className='header__img' 
                src='../images/sushi-home.png' 
                alt='Sushi plate'
            />
            <section className='header__text'>
                <h1 className='header__title'>
                    Sushi made with special care
                </h1>
                <p className='header__description'>
                    Browse our menu to find your <span className='bold'>favorite sushi dishes</span>, or try something new!
                </p>
                <p className='header__description'>
                    Whether you're craving classic California rolls or adventurous Dragon rolls, we have <span className='bold'>something for everyone.</span>
                </p>
                <Link to='/category/regular'>
                    <button className='header__button'>
                        Order Now
                        <FaAngleRight className='header__button__icon' />
                    </button>
                </Link>
            </section>
        </header>
    )
}