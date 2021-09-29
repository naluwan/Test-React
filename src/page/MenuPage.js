import React, { useMemo, useEffect, useReducer } from 'react'

import MenuItem from '../component/MenuItem'
import Menu from '../component/Menu'
import { OpenContext } from '../context/ControlContext'

import { useSelector, useDispatch } from 'react-redux'
import { fetchCityItem } from '../model/action'

const reducer = function (state, action) {
  switch (action.type) {
    case 'SWITCH':
      return !state // 這邊只有開/關
    default:
      throw new Error('Unknown action')
  }
}

const MenuPage = () => {
  const [isOpen, isOpenDispatch] = useReducer(reducer, true)
  const menuItemData = useSelector((state) => state.menuItemData)
  const dispatch = useDispatch()

  let menuItemArr = useMemo(
    () =>
      menuItemData.map((wording) => <MenuItem text={wording} key={wording} />),
    [menuItemData]
  )

  return (
    <OpenContext.Provider
      value={{
        openContext: isOpen,
        setOpenContext: isOpenDispatch,
      }}
    >
      <Menu title={'Naomi的Like'}>{menuItemArr}</Menu>
      <button
        onClick={() => {
          dispatch({
            type: 'ADD_ITEM',
            payload: { itemNew: '測試資料' },
          })
        }}
      >
        更改第一個menuItem
      </button>
      <button
        onClick={() => {
          dispatch(fetchCityItem())
        }}
      >
        抓取並修改menuItem
      </button>
    </OpenContext.Provider>
  )
}

export default MenuPage
