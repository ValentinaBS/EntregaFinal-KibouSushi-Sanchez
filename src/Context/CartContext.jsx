import { createContext, useState, useContext } from 'react'

export const CartContext = createContext(0)
export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [cartList, setCartList] = useState([]);
    
    const addToCart = (itemAdd) => {
        if(!isInCart(itemAdd.id)) {
            setCartList([...cartList, itemAdd])
        }
    };

    const isInCart = (id) => cartList.some(it => it.id === id);

    const getItemQuantity = () => {
        return cartList.reduce((prevQuantity, actQuantity) => prevQuantity + actQuantity.quantity, 0)
    };

    const getTotalPrice = () => {
        return cartList.reduce((prev, act) => prev + act.quantity * act.price, 0)
    };

    const deleteItem = (id) => setCartList(cartList.filter(it => it.id !== id));
    
    const clearCartList = () => setCartList([]);

    return(
        <CartContext.Provider value={{ 
            cartList, 
            setCartList, 
            addToCart, 
            isInCart, 
            getItemQuantity, 
            getTotalPrice, 
            deleteItem, 
            clearCartList,
        }}>
            {children}
        </CartContext.Provider>
    )
}