import React from 'react';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import ItemListContainer from './Components/NavBar/ItemListContainer';

export default function App() {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting='The item list is still under construction...' />
        </>
    )
}
