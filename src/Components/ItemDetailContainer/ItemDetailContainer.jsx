import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa'
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
    console.log(item)

    return (
        <>
            {loading || !item.name
            ?   <div className='detail__warning'>
                <h1>
                    We couldn't find the item you were looking for...
                </h1>
                <Link to='/'>
                    <button className='error__button'>
                        Go to home
                        <FaHome className='error__button__icon'/>
                    </button>
                </Link>
                </div>
            :   <ItemDetail item={item} />
            }
        </>
    )
}
