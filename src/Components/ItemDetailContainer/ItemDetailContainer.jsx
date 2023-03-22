import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getItemById } from '../itemsData';
import ItemDetail from './ItemDetail'

export default function ItemDetailContainer() {
    const [item, setItem] = useState({});
    const { itemId } = useParams()
    
    useEffect(()=>{
        getItemById(itemId)
        .then(response =>{
            setItem(response)
        })
        .catch(error =>{
            console.log(error)
        }) 
        },[itemId])

    return (
        <>
            <ItemDetail item={item} />
        </>
    )
}
