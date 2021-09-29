import React, { memo } from 'react'
import { MenuStyleItem } from './MenuStyleItem'

function MenuItem({ text }) {
  return <MenuStyleItem>{text}</MenuStyleItem>
}
export default memo(MenuItem)
