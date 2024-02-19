import React from 'react'
import styles from './Header.module.css'
import TG_SRC from './tg_src/TG_SRC.jsx'
import UserInfo from './UserInfo/UserInfo.jsx'
const Header = () => {
  // const onClose = () => {
  //   tg.close()
  // }

  return (
    <div className={styles.header}>
      <UserInfo />
      <TG_SRC />
    </div>
  )
}

export default Header