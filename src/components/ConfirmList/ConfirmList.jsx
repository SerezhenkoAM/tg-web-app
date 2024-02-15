import React from 'react'

const ConfirmList = ({data = []}) => {
  return (
    <div className="">
      <h1>Выбранные товары</h1>
    {
      data.map(item => (
        <ul>
          <li>{item}</li>
        </ul>
        ))
    }
    </div>
  )
}

export default ConfirmList