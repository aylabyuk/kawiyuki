import React from 'react'

import MenuItem from '../MenuItem'

export interface MenuProps {}

export const Menu: React.FC<MenuProps> = () => {
  return (
    <div className="flex gap-2">
      <MenuItem path="/">home</MenuItem>
      <MenuItem path="/tags">tags</MenuItem>
      <MenuItem path="/portfolio">portfolio</MenuItem>
      <MenuItem path="/about">about</MenuItem>
    </div>
  )
}

export default Menu
