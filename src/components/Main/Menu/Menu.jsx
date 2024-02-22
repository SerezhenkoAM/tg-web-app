import React from 'react'
import { NavLink } from 'react-router-dom'
import arrow from './img/arrow.png'
import arrow_2 from './img/arrow_2.png'
import styles from './Menu.module.css'
const Menu = () => {
  return (
    <div className={styles.wrapp}>
      <div className={styles.button_1}>
        <div className={styles.grid}>
          <p className={styles.bold_text}><NavLink to="/friends">Зови друзей</NavLink></p>
          <img src={arrow} alt="" />
        </div> 
        <p className={styles.light_text}>Дарим по 500 рублей каждому</p>
      </div>
      <NavLink to="/store">
      <div className={styles.button_3}>
        <p className={styles.bold_text}>Посмотреть ассортимент товаров</p>
        <img src={arrow_2} alt="Ошибка отображения картинки" className={styles.arrow_2} />
      </div>
      </NavLink>
      <div className={styles.button_2}>
        <div className={styles.grid}>
          <p className={styles.bold_text}>The Mobile Shop</p>
          <img src={arrow} alt="" />
        </div>
        <p className={styles.light_text}>Узнай о нашей компании больше</p>
      </div>
    </div>
  )
}

export default Menu