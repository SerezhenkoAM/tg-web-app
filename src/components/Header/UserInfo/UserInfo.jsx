import React, { useEffect } from 'react';
import styles from './UserInfo.module.css'
const UserInfo = () => {
  const tg = window.Telegram.WebApp
  useEffect(() => {
    fetch('https://api.telegram.org/file/bot6599850488:AAE7qcVF-evvXSdycqH9sOjMAeYtNX1Wijc/photos/file_0.jpg')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.blob();
  })
  .then(blob => {
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.src = url;
    document.body.appendChild(img); // добавляем изображение на страницу
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
  });
  })
  return (
    <div className={styles.wrapp}>
      {tg.initDataUnsafe?.photo_url}
        <img src={tg.initDataUnsafe?.photo_url == null } alt="Фотография" className={styles.photo_url}/>
        <div className="">
          <p>Добрый день,</p>
          <p>{tg.initDataUnsafe?.user?.first_name}</p>
        </div>
    </div>
  )
}

export default UserInfo