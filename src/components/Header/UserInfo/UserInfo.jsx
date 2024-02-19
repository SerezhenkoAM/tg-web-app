import React, { useEffect } from 'react';
import styles from './UserInfo.module.css'
const UserInfo = () => {
  const tg = window.Telegram.WebApp
  useEffect(() => {
    console.log(tg.initData)
    async function getUserInfo() {
      const user = await telegram.getUserProfilePhotos({userId: '@username', offset: 0, limit: 1});
      const photo = user.photos[0][0].fileId;
      return photo;
    }
    console.log(getUserInfo)
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