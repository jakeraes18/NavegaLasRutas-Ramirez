import { useState, useEffect } from "react"
import { useParams } from "react-router"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
    const [item, setItem] = useState({ images: [], title: '', description: '' })
    const {id} = useParams()

    useEffect(() => {
        fetch(`https://dummyjson.com/products/${id}`)
            .then(res => res.json())
            .then(product => setItem(product));
    }, [id])

    return (
        <ItemDetail item={item} />
    )
}

export default ItemDetailContainer