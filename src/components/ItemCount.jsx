import { useState } from "react"
import styles from "../styles/count.module.css"

function ItemCount () {
    const [count, setCount] = useState(0)
    const handleAdd = () => {
        setCount(count + 1)
    }
    const handleDiscount = () => {
        setCount(count - 1)
    }

    return (
        <div className={styles.contador}>
            <button onClick={handleAdd}>+</button>
            <p>{count}</p>
            <button onClick={handleDiscount} disabled={count < 1}>-</button>
        </div>
    )
}

export default ItemCount