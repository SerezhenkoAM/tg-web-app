import React, { useState } from 'react'
import ProductItem from '../ProductItem/ProductItem'

const ProductList = () => {
  const products = [
    {title: 'Ряженка', price: 2000},
    {title: 'Сливки', price: 6000},
    {title: 'Хлеб', price: 5000},
    {title: 'Мясо', price: 3000},
    {title: 'Рис', price: 1000}
  ]
  const [addedItems,setAddedItems] = useState([])
  const tg = window.Telegram.WebApp
  const onAdd = (product) => {
    setAddedItems(product.id)
    if (addedItems === 0) {
      tg.MainButton.hide()
    } else {
      tg.MainButton.show()
      tg.MainButtons.setParams({
        text: `Купить ${addedItems}`
      })
    }
  }
  return (
    <div>
      {
        products.map(item => (
          <ProductItem 
              product={item}
              onAdd={onAdd}
          />
        ))
      }
    </div>
  )
} 

export default ProductList