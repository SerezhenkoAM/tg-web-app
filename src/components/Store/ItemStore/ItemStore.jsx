import React from 'react'
import styles from './ItemStore.module.css'
const ItemStore = ({data}) => {
  return (
  <div className={styles.wrapp}>
    <img src={require('./img/phone.png')} alt="Продукт" className={styles.img} />
    <div className={styles.text}>
      <p className={styles.bold_text}>{data.text}</p>
      <p>•</p>
      <p>{data.price}</p>
    </div>
    <button className={styles.btn}>Добавить</button>
  </div>
  )
}

export default ItemStore