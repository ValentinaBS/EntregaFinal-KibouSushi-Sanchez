import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getFirestore, doc, getDoc } from 'firebase/firestore'
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const [loading, setLoading] = useState(true)
    const { itemId } = useParams()
    
    useEffect(()=>{
        const queryDb = getFirestore();
        const queryDoc = doc(queryDb, 'items', itemId);
        getDoc(queryDoc)
        .then(res=>setItem({id: res.id, ...res.data()}))
        .finally(()=>{
            setLoading(false)
        })
        },[itemId])

    return (
        <>
            {loading 
            ? <h1 className='loading'>Loading...</h1>
            : <ItemDetail item={item} />
            }
        </>
    )
}
