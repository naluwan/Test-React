import React from 'react'

const menuItemStyle = {
  marginBottom: '7px',
  listStyle: 'none',
}

function MenuItem({ text }) {
  return <li style={menuItemStyle}>{text}</li>
}

export default MenuItem
