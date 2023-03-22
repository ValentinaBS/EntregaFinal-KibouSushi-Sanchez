import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getItems, getItemsByCategory } from '../itemsData'
import './ItemListContainer.css';
import ItemList from './ItemList'

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const { categoryId } = useParams() 

    useEffect( ()=> {
        if(categoryId){
            getItemsByCategory(categoryId)
            .then(response => {
                setItems(response)
            })

            .catch(error =>{
                console.log(error)
            })
        }
        else{
            getItems()
            .then(response => {
                setItems(response)
            })

            .catch(error =>{
                console.log(error)
            })
        }
    }, [categoryId])

    return (
        <>
            <p className='item__subtitle'>
                Made specially for you
            </p>
            <h1 className='item__title' id='items'>
                Our Best Dishes
            </h1>
            <section className='items'>
                <ItemList items={items} />
            </section>
        </>
    )
}

export default ItemListContainer