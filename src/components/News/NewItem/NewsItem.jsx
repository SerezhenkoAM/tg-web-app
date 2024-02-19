import React from 'react'
import styles from './NewsItem.module.css'
const NewsItem = ({data}) => {
  return (
    <div className={styles.wrapp}>
      <img src={require('../img/image 10.png')} alt="" className={styles.image}/>
    </div>
  )
}

export default NewsItem