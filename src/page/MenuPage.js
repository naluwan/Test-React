import React from 'react'

import MenuItem from '../component/MenuItem'
import Menu from '../component/Menu'

let menuItemWording = ['Like的發問', 'Like的回答', 'Like的文章', 'Like的留言']

const MenuPage = () => {
  let menuItemArr = menuItemWording.map((wording) => (
    <MenuItem text={wording} />
  ))

  return <Menu title={'Naomi的Like'}>{menuItemArr}</Menu>
}

export default MenuPage
