import { useState } from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';
import { categories } from '../itemsData';
import { FaUserAlt, FaTimes, FaBars } from 'react-icons/fa';
import { Link, NavLink } from 'react-router-dom'

function NavBar() {
    const [hiddenMenu, setHiddenMenu] = useState(true);

    return (
        <nav className='nav__container'>
            <Link to='/'>
                    <img
                    src='../images/logo-light-nav.png'
                    alt='Kibou logo'
                    className='nav__logo'
                    />
            </Link>
            <div className='nav__menu' id={(hiddenMenu ? 'nav__hidden' : '')}>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <NavLink 
                            to='/' 
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
                <FaUserAlt className='nav__profile__button' />
                <CartWidget />
                <FaBars 
                    className='nav__toggle__button' 
                    onClick={() => setHiddenMenu(!hiddenMenu)} 
                />
            </div>
        </nav>
    )
}

export default NavBar