import React from 'react'

const ProductItem = ({product,onAdd}) => {
  const addProduct = () => {
    onAdd(product.title)
  }
  return (
    <div>
      <div>{product.title}</div>
      <div>{product.price}</div>
      <button onClick={addProduct}>Добавить в корзину</button>
    </div>
  )
}

export default ProductItem