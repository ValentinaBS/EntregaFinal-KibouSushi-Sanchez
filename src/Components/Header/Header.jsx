import './Header.css';
import { Link } from 'react-router-dom';
import { FaAngleRight } from 'react-icons/fa';

export default function Header() {
    return (
        <>
        <header className='header' id='home'>
            <img 
                className='header__img' 
                src='https://firebasestorage.googleapis.com/v0/b/kibou-sushi-ecommerce.appspot.com/o/sushi-home.png?alt=media&token=7cd19fa0-c504-4ce6-adb5-6e6ab25f42b3' 
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
                <Link to='/all'>
                    <button className='header__button'>
                        Order Now
                        <FaAngleRight className='header__button__icon' />
                    </button>
                </Link>
            </section>
        </header>
        <img className='rice' src='https://firebasestorage.googleapis.com/v0/b/kibou-sushi-ecommerce.appspot.com/o/bg-rice.png?alt=media&token=8d4babf4-aff0-4665-99a7-6882bb693e16' alt='' />
        </>
    )
}