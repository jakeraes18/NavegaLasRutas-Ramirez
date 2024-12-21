import styles from '../styles/Item.module.css'
import { Link } from 'react-router';
import Button from 'react-bootstrap/Button';

function Item({ item }) {
    return (
        <div key={item.id} className={styles.card}>
            <img className='imgProduct' variant="top" src={item.thumbnail} />
            <div className={styles.infoProduct}>
                <h1 className={styles.titleProduct}>{item.title}</h1>
                <p className={styles.descrip}>{item.description}</p>
                <p className={styles.categoria}>{item.category}</p>
                <Button as={Link} to={`/item/${item.id}`} className={styles.btnn} variant="outline-primary">Ver más</Button>
            </div>
        </div>
    )
}

export default Item