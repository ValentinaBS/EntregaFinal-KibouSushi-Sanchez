import React from 'react';
import CartWidget from './CartWidget';
import './NavBar.css';
import { FaUserAlt, FaTimes, FaBars } from 'react-icons/fa';

function NavBar() {
    return (
        <nav className='nav__container'>
            <a href='#home'>
                <img
                src='./images/logo-light-nav.png'
                alt='Kibou logo'
                className='nav__logo'
            /></a>
            <div className='nav__menu' id='nav__hidden'>
                <ul className='nav__list'>
                    <li className='nav__item'>
                        <a href='#premium' className='nav__link'>
                            Premium
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#regular' className='nav__link'>
                            Regular
                        </a>
                    </li>
                    <li className='nav__item'>
                        <a href='#regular' className='nav__link'>
                            Vegetarian
                        </a>
                    </li>
                </ul>
                <FaTimes className='nav__close__button' />
            </div>
            <div className='nav__buttons'>
                <FaUserAlt className='nav__profile__button' />
                <CartWidget />
                <FaBars className='nav__toggle__button' />
            </div>
        </nav>
    )
}

export default NavBar