import './OrderSuccess.css'
import { Link, useParams } from 'react-router-dom'
import { FaHome } from 'react-icons/fa'

export default function OrderSuccess() {
    const { orderId } = useParams();

    return (
        <section className='success'>
            <h1 className='success__title'>
                Thank you!
            </h1>
            <div>
                <p className='success__text'>
                    Your order id is: <span className='bold'>{orderId}</span> 
                </p>
                <p>
                    Make sure to check your mailbox to proceed with your purchase!
                </p>
            </div>
            <img 
                className='success__img' 
                src='https://firebasestorage.googleapis.com/v0/b/kibou-sushi-ecommerce.appspot.com/o/sushi-home.png?alt=media&token=7cd19fa0-c504-4ce6-adb5-6e6ab25f42b3' 
                alt='Sushi plate'
            />
            <Link to='/' className='success__link'>
                <button className='success__button'>
                    Go to home
                    <FaHome className='success__button__icon'/>
                </button>
            </Link>
        </section>
    )
}