import React, { useState, useEffect, useContext } from 'react'
import { OpenContext } from '../context/ControlContext'

const menuContainerStyle = {
  position: 'relative',
  width: '300px',
  padding: '14px',
  fontFamily: 'Microsoft JhengHei',
  paddingBottom: '7px',
  backgroundColor: 'white',
  border: '1px solid #E5E5E5',
}

const menuTitleStyle = {
  marginBottom: '7px',
  fontWeight: 'bold',
  color: '#00a0e9',
  //   cursor: 'pointer',
}

const menuBtnStyle = {
  position: 'absolute',
  right: '7px',
  top: '33px',
  backgroundColor: 'transparent',
  border: 'none',
  color: '#00a0e9',
  outline: 'none',
  cursor: 'pointer',
}

const menuStyle = {
  display: 'block', //這裡先讓它顯示
}

function Menu({ title, children }) {
  // const [isOpen, setIsOpen] = useState(false)
  const isOpenUtil = useContext(OpenContext)

  useEffect(() => {
    if (isOpenUtil.openContext) {
      // document.getElementsByClassName('menu-btn')[0].textContent = '︽'
      document.getElementsByClassName('menu')[0].style.display = 'block'
    } else {
      // document.getElementsByClassName('menu-btn')[0].textContent = '︾'
      document.getElementsByClassName('menu')[0].style.display = 'none'
    }
  }, [isOpenUtil.openContext])

  return (
    <div style={menuContainerStyle}>
      <p style={menuTitleStyle}>{title}</p>
      <button
        style={menuBtnStyle}
        onClick={() => {
          isOpenUtil.setOpenContext({ type: 'SWITCH' })
        }}
      >
        {isOpenUtil.openContext ? '︽' : '︾'}
      </button>
      <ul className="menu">{children}</ul>
    </div>
  )
}

export default Menu
