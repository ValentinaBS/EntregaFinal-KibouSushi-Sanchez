import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore';
import './ItemListContainer.css';
import ItemList from './ItemList'

function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true)
    const { categoryId } = useParams() 

    useEffect(()=> {
        const queryDb = getFirestore();
        const queryCollection = collection(queryDb, 'items');
        if(categoryId) {
            const queryFilter = query(queryCollection, where('category', 'array-contains', categoryId))
            getDocs(queryFilter)
            .then(res=>setItems(res.docs.map(it=>({id: it.id, ...it.data()}))))
            .finally(() => {
                setLoading(false)
            })
        } else {
            getDocs(queryCollection)
            .then(res=>setItems(res.docs.map(it=>({id: it.id, ...it.data()}))))
            .finally(() => {
                setLoading(false)
            })
        }
    }, [categoryId])

    return (
        <>
            {loading
            ?   <h1 className='items__loading loading'>Loading...</h1>
            :   <>
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
            }
        </>
    )
}

export default ItemListContainer