import { useState } from 'react';
import './NavBar.css';
import CartWidget from './CartWidget';
import { FaUserAlt, FaTimes, FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    const [hiddenMenu, setHiddenMenu] = useState(true);
    const categories = [
        {id: 1, name: 'regular'}, 
        {id: 2, name: 'premium'}, 
        {id: 3, name: 'vegetarian'}
    ];

    return (
        <nav className='nav__container'>
            <Link to='/'>
                    <img
                    src='https://firebasestorage.googleapis.com/v0/b/kibou-sushi-ecommerce.appspot.com/o/logo-light-nav.png?alt=media&token=31523b2c-8299-42f4-bebd-604766e34406'
                    alt='Kibou logo'
                    className='nav__logo'
                    />
            </Link>
            <div className='nav__menu' id={(hiddenMenu ? 'nav__hidden' : '')}>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <NavLink 
                            to='/all' 
                            className='nav__link' 
                        >
                            All
                        </NavLink>
                    </li>
                    {   categories.length > 0 
                    ?   categories.map((category) => (
                            <li key={category.id} className='nav__item'>
                                <NavLink 
                                    to={`/category/${category.name}`} 
                                    className='nav__link'
                                >
                                    {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
                                </NavLink>
                            </li>
                        ))
                    : <p>Loading...</p>
                    }
                </ul>
                <FaTimes 
                    className='nav__close__button' 
                    onClick={() => setHiddenMenu(!hiddenMenu)} 
                />
            </div>
            <div className='nav__buttons'>
                <Link to='/error'>
                    <FaUserAlt className='nav__profile__button' />
                </Link>
                <Link to='/cart'>
                    <CartWidget />
                </Link>
                <FaBars 
                    className='nav__toggle__button' 
                    onClick={() => setHiddenMenu(!hiddenMenu)} 
                />
            </div>
        </nav>
    )
}

export default NavBar