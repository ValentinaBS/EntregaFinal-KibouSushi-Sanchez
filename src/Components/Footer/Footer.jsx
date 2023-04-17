import './Footer.css';
import { RiWhatsappFill, RiInstagramFill, RiFacebookFill, RiTwitterFill } from 'react-icons/ri';

export default function Footer() {
    const socials = [
        {
            id: 1,
            name: 'Instagram',
            link: 'https://www.instagram.com/'
        },
        {
            id: 2,
            name: 'Facebook',
            link: 'https://www.facebook.com/'
        },
        {
            id: 3,
            name: 'Twitter',
            link: 'https://twitter.com/'
        }
    ];

    return (
        <footer className='footer' id='contact-us'>
            <div className='footer__container'>
                <img 
                    src='https://firebasestorage.googleapis.com/v0/b/kibou-sushi-ecommerce.appspot.com/o/logo-dark-title.png?alt=media&token=460bf4be-7b94-403a-ba76-fbc71f726e96' 
                    alt='Kibou logo' 
                    className='footer__logo' 
                />
                <section className='footer__newsletter'>
                    <p className='footer__newsletter__subtitle'>
                        Get 10% off on your next order!
                    </p>
                    <h3 className='footer__newsletter__title'>
                        Subscribe to our newsletter
                    </h3>
                    <form className='footer__form'>
                        <input 
                            type='email' 
                            required 
                            placeholder='email@gmail.com' 
                            className='footer__form__email'
                        />
                        <input 
                            type='submit' 
                            value='Submit' 
                            className='footer__form__submit' 
                        /> 
                    </form>
                </section>
                <section className='footer__contact'>
                    <h3 className='footer__contact__title'>
                        Contact Us
                    </h3>
                    <a href='/' className='footer__contact__phone'>
                        <RiWhatsappFill className='footer__contact__icon'/>
                        +54 15 3333-3333
                    </a>
                    <h3 className='footer__contact__title'>
                        Follow Us
                    </h3>
                    <ul className='footer__contact__socials'>
                        {socials.map((social) => {
                            return (
                                <li className='footer__contact__social' 
                                    key={social.id}>
                                    <a href={social.link} >
                                        {social.name === 'Instagram' ? <RiInstagramFill />
                                        : social.name === 'Facebook' ? <RiFacebookFill />
                                        : <RiTwitterFill />}
                                    </a>
                                </li>
                            )
                        })}
                    </ul>
                </section>
            </div>
            <section className='footer__legal'>
                <p className='footer__legal__copyright'>
                    © 2023 Kibou Sushi. All rights reserved.
                </p>
                <div className='footer__legal__container'>
                    <p className='footer__legal__privacy'>
                        <a href='/'>
                            Privacy Policy
                        </a>
                    </p>
                    <p className='footer__legal__terms'>
                        <a href='/'>
                            Terms and Conditions
                        </a>
                    </p>
                </div>
            </section>
        </footer>
    )
}
