import Item from './Item';
import styles from '../styles/ItemList.module.css'

function ItemList({ items }) {
    return (
        <div className={styles.cajaFlex}>
            {items.map(item => (
                <Item item={item} key={item.id} />
            ))}
        </div>
    )
}

export default ItemList