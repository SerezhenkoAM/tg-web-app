import React, { useEffect, useState } from 'react'
const Form = () => {
  const tg = window.Telegram.WebApp
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const onChangeName = (e) => {
    setName(e.target.value)
  }
  const onChangeSurname = (e) => {
    setSurname(e.target.value)
  }
  useEffect(() => {
    tg.MainButton.setParams({
      text: 'Отправить данные'
    })
  })
  useEffect(() => {
    if(!name || !surname) {
      tg.MainButton.show()
    } else {
      tg.MainButton.hide()
    }
  })
  return (
    <div>
      Введите данные
      <input type="text" placeholder='Ваше имя' onChange={onChangeName} value={name}/>
      <input type="text" placeholder='Ваша Фамилия' onChange={onChangeSurname} value={surname}/>
      <button onClick={showbtn}>Нажать</button>
    </div>
  )
}

export default Form