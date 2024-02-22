import React from 'react'
import { NavLink } from 'react-router-dom'
import arrow from './img/arrow.png'
import arrow_2 from './img/arrow_2.png'
import styles from './Menu.module.css'
const Menu = () => {
  return (
    <div className={styles.wrapp}>
      <NavLink className={styles.button_1}>
        <div className={styles.grid}>
          <p className={styles.bold_text}>Зови друзей</p>
          <img src={arrow} alt="Перейти" />
        </div> 
        <p className={styles.light_text}>Дарим по 500 рублей каждому</p>
      </NavLink>
      <NavLink to="/store"  className={styles.button_3}>
        <p className={styles.bold_text}>Посмотреть ассортимент товаров</p>
        <img src={arrow_2} alt="Перейти" className={styles.arrow_2} />
      </NavLink>
      <NavLink className={styles.button_2}>
        <div className={styles.grid}>
          <p className={styles.bold_text}>The Mobile Shop</p>
          <img src={arrow} alt="Перейти" />
        </div>
        <p className={styles.light_text}>Узнай о нашей компании больше</p>
      </NavLink>
    </div>
  )
}

export default Menu