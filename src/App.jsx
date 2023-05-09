import './App.css';
import Error from './Components/Error/Error'
import NavBar from './Components/NavBar/NavBar';
import Cart from './Components/Cart/Cart';
import Checkout from './Components/Checkout/Checkout';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Footer from './Components/Footer/Footer';
import OrderSuccess from  './Components/OrderSuccess/OrderSuccess';
import { CartProvider } from './Context/CartContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <CartProvider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path='/' exact element={<><Header /> <ItemListContainer /></>} />
                    <Route path='/*' exact element={<Error />} />
                    <Route path='/all' exact element={<ItemListContainer />} />
                    <Route path='/category/:categoryId' exact element={<ItemListContainer/>} />
                    <Route path='/item/:itemId' exact element={<ItemDetailContainer/>} />
                    <Route path='/cart' exact element={<Cart />} />
                    <Route path='/checkout' exact element={<Checkout />} />
                    <Route path={'/order/:orderId'} element={<OrderSuccess />} /> 
                </Routes>
                <Footer />
            </BrowserRouter>
        </CartProvider>
    )
}
