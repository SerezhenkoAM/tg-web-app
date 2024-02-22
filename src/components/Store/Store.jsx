import React from 'react';
import styles from './Store.module.css'
import ItemStore from './ItemStore/ItemStore'
const Store = () => {
  const data = [
    {id: 0, text: 'iPhone 15', price: '45.000'},
    {id: 1, text: 'iPhone 14', price: '90.000'},
    {id: 2, text: 'iPhone 13', price: '65.000'},
    {id: 3, text: 'iPhone 12', price: '66.000'},
    {id: 4, text: 'iPhone 11', price: '70.000'},

  ]
  return (
    <div className={styles.wrapp}>
      {
        data.map((item) => {
          return (
            <ItemStore  data={item} />
          )
        })
      }
    </div>
  )
}

export default Store