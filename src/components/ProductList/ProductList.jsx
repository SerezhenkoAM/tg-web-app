import React, { useEffect, useState } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import styles from './ProductList.module.css'

const ProductList = () => {
  const products = [
    {id: 0, title: 'Ряженка', price: 2000},
    {id: 1,title: 'Сливки', price: 6000},
    {id: 2, title: 'Хлеб', price: 5000},
    {id: 3, title: 'Мясо', price: 3000},
    {id: 4,title: 'Рис', price: 1000}
  ]

  const [addedItems,setAddedItems] = useState([])
  const tg = window.Telegram.WebApp

  const getTotalPrice = (items) => {
    return items.reduce((result,cur) => {
      return result += cur.price
    }, 0)
  }

  const onAdd = (product) => {
    setAddedItems([...addedItems, product])
  }

  useEffect(() => {
    if (addedItems.length === 0) {
        tg.MainButton.hide()
    } else {
      tg.MainButton.show()
      tg.MainButton.setParams({
        text: `Купить ${getTotalPrice(addedItems)}`,
      })
    }
  }, [addedItems, tg.MainButton])
  return (
    <div>
      <h1 className={styles.h1}>Список товаров</h1>
      <div className={styles.list}>
      {
        products.map(item => (
          <ProductItem 
          key={item.id}
          product={item}
          onAdd={onAdd}
          />
          ))
        }
      </div>
    </div>
  )
} 

export default ProductList