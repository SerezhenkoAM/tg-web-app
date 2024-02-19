import React from 'react';
import styles from './UserInfo.module.css'
const UserInfo = () => {
  const tg = window.Telegram.WebApp
  return (
    <div className={styles.wrapp}>
        <img src={tg.initDataUnsafe?.photo_url} alt="Фотография пользователя" className={styles.photo_url}/>
        <div className="">
          <p>Добрый день,</p>
          <p>{tg.initDataUnsafe?.user?.first_name}</p>
        </div>
    </div>
  )
}

export default UserInfo