import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router';


function ItemListContainer() {
    const [items, setItems] = useState([])
    const { name } = useParams()

    useEffect(() => {
        const allProducts = 'https://dummyjson.com/products'
        const nameProducts = `https://dummyjson.com/products/category/${name}`

        fetch(name ? nameProducts : allProducts)
            .then(res => res.json())
            .then(res => setItems(res.products))
    }, [name])

    return (
        <ItemList items={items} />
    );
};

export default ItemListContainer;