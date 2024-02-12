import React from 'react'
import styles from './Header.module.css'
const Header = () => {
  const tg = window.Telegram.WebApp

  const onClose = () => {
    tg.close()
  }

  return (
    <div className={styles.header}>
      <div className={styles.username}>Активный пользователь: {tg.initDataUnsafe?.user?.username}</div>
      <button onClick={onClose} className={styles.button}>Закрыть</button>
    </div>
  )
}

export default Header