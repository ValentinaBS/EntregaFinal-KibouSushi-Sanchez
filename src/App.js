import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Header from './Components/Header/Header';
import ItemListContainer from './Components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer/ItemDetailContainer';
import Footer from './Components/Footer/Footer'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path='/' exact element={<><Header /> <ItemListContainer /></>} />
                <Route path="/category/:categoryId" exact element={<ItemListContainer/>} />
                <Route path="/item/:itemId" exact element={<ItemDetailContainer/>} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
