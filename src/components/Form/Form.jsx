import React, { useCallback, useEffect, useState } from 'react'
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
  const onSendData = useCallback(() => {
    const data = {
      name,
      surname
    }
    tg.sendData(JSON.stringify(data))
  }, [name, surname])
  useEffect(() => {
    tg.WebApp.onEvent('mainButtonClicked', onSendData)
    return () => {
      tg.WebApp.offEvent('mainButtonClicked', onSendData)
    }
  }, [onSendData])
  useEffect(() => {
    if(name.length >= 1 || surname >= 1) {
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
    </div>
  )
}

export default Form