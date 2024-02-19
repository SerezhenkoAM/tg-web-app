import React from 'react'

const ConfirmList = () => {
  const tg = window.Telegram.WebApp
  tg.MainButton.show()
  tg.MainButton.setParams({
    text: `Оплатить заказ`,
  })
  tg.onEvent('mainButtonClicked', console.log('a'))

  return (
    <div className="">
      <h1>Выбранные товары</h1>
    {/* {
      data.map(item => (
        <ul>
          <li>{item}</li>
        </ul>
        ))
    } */}
    </div>
  )
}

export default ConfirmList