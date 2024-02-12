import React, { useState } from 'react'
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
  return (
    <div>
      Введите данные
      <input type="text" placeholder='Ваше имя' onChange={onChangeName} value={name}/>
      <input type="text" placeholder='Ваша Фамилия' onChange={onChangeSurname} value={surname}/>
      {tg.MainButton.isVisibler}
    </div>
  )
}

export default Form