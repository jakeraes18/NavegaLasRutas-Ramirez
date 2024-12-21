import ItemCount from "./ItemCount"
import styles from "../styles/ItemDetail.module.css"

function ItemDetail({item}) {
    return (
        <div className={styles.itemDetail}>
            <img src={item?.images[0]} />
            <h3>{item?.title}</h3>
            <p>{item?.description}</p>
            <ItemCount />
        </div>
    )
}

export default ItemDetail