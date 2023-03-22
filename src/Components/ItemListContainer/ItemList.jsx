import Item from './Item'

export default function ItemList({items}) {
    return (
        <>
        {
            items.length > 0 
            ? items.map(item => (
                <Item 
                key={item.id} 
                item={item} 
                />
            ))
            : <h1 className='items__loading'>Loading...</h1>
        }
        </>
    )
}
