import React, { useEffect } from 'react';
import styles from './UserInfo.module.css'
const UserInfo = () => {
  const tg = window.Telegram.WebApp
  useEffect(() => {
    console.log(tg)
  })
  return (
    <div className={styles.wrapp}>
      {tg.initDataUnsafe?.photo_url}
        <img src={tg.initDataUnsafe?.photo_url} alt="Фотография" className={styles.photo_url}/>
        <div className="">
          <p>Добрый день,</p>
          <p>{tg.initDataUnsafe?.user?.first_name}</p>
        </div>
    </div>
  )
}

export default UserInfo