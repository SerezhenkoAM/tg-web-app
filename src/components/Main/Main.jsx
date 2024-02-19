import React from 'react'
import styles from './Main.module.css'
import Menu from './Menu/Menu'
import News from '../News/News'
const Main = () => {
  return (
    <>
    <News />
    <div className={styles.wrapp}>
      <Menu />
      <div className={styles.button_4}>
        <p>Заказать обслуживание</p>
      </div>
    </div>
    </>
  )
}

export default Main