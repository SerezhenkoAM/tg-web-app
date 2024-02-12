import React from 'react'
import styles from './ProductItem.module.css'

const ProductItem = ({product,onAdd}) => {
  const addProduct = () => {
    onAdd(product.title)
  }
  return (
    <div className={styles.wrapp}>
      <div className={styles.image}>Картинка</div>
      <div className={styles.title}>{product.title}</div>
      <div className={styles.price}>{product.price}</div>
      <button onClick={addProduct} className={styles.button}>Добавить в корзину</button>
    </div>
  )
}

export default ProductItem