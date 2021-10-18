import React from 'react'
import Link from 'next/link'

export interface MenuItemProps {
  path: string
  children: React.ReactNode
}

export const MenuItem: React.FC<MenuItemProps> = ({ path, children }) => {
  return (
    <Link href={path} passHref>
      <a className="text-xl px-2 py-3 w-max">
        <span className={'font-semibold transform text-rose-600'}>
          {children}
        </span>
      </a>
    </Link>
  )
}

export default MenuItem
