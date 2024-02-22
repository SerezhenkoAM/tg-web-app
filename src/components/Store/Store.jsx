import React from 'react';
import styles from './Store.module.css'
import ItemStore from './ItemStore/ItemStore'
// import arrow from './img/arrow3.png'
// import settings from './img/settings.png'
// import { NavLink } from 'react-router-dom';

const Store = () => {
  const data = [
    {id: 0, text: 'iPhone 15', price: '45.000'},
    {id: 1, text: 'iPhone 14', price: '90.000'},
    {id: 2, text: 'iPhone 13', price: '65.000'},
    {id: 3, text: 'iPhone 12', price: '66.000'},
    {id: 4, text: 'iPhone 11', price: '70.000'},

  ]
  return (
    <>
    <div className={styles.wrapp}>
      {/* <NavLink to="/">
        <img src={arrow} alt="Назад" className={styles.img} />
      </NavLink> */}
    <div className={styles.navbar}>
      <input type="text" className={styles.input} placeholder='Найти товар'/>
    </div>
    <div className={styles.grid}>
      {
        data.map((item) => {
          return (
            <ItemStore  data={item} />
            )
          })
        }
        </div>
    </div>
    </>
  )
}

export default Store