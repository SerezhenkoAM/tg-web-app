import React from 'react'
import styles from './TG_SRC.module.css'
const TG_SRC = () => {

  return (
    <div className={styles.wrapp}>
      <img src={require('./img/telegram.png')} alt="Иконка телеграма" className={styles.logo} />
      <div className="">
          <p className={styles.text_1}>@mobileStore</p>
          <p className={styles.text_2}>Наш телеграм канал</p>
      </div>
    </div>
  )
}

export default TG_SRC