import React from 'react'

const Header = () => {
  const tg = window.Telegram.WebApp

  const onClose = () => {
    tg.close()
  }

  return (
    <div className='header'>
      <button onClick={onClose}>Закрыть</button>
      <span className='username'>Имя пользователя: {tg.initDataUnsafe}</span>
    </div>
  )
}

export default Header