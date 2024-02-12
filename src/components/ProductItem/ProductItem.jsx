import React from 'react'

const ProductItem = ({product,onAdd}) => {
  const addProduct = () => {
    onAdd(product)
  }
  return (
    <div>
      <div>{product.title}</div>
      <div>{product.price}</div>
      <button onClick={addProduct(product.title)}>Добавить в корзину</button>
    </div>
  )
}

export default ProductItem