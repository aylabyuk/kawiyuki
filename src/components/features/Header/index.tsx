import React from 'react'

import tw from '../../../utils/tw'
import Hamburger from '../../base/Hamburger'
import Menu from '../../base/Menu'

export interface HeaderProps {
  isMobileMenuOpen?: boolean
  onHamburgerClick: () => void
}

export const Header: React.FC<HeaderProps> = ({
  isMobileMenuOpen,
  onHamburgerClick,
}) => {
  const brandTextStyle = tw`font-extrabold text-2xl md:text-3xl lg:text-4xl`

  return (
    <div className="py-4 flex w-full items-center justify-between">
      <div className="bg-white flex">
        <span className={`text-primary-600 ${brandTextStyle}`}>Kawi</span>
        <span className={`text-rose-600 ${brandTextStyle}`}>Yuki</span>
      </div>

      <div className="pr-1 block md:hidden lg:hidden">
        <Hamburger isOpen={isMobileMenuOpen} onClick={onHamburgerClick} />
      </div>

      <div className="hidden md:block lg:block">
        <Menu />
      </div>
    </div>
  )
}

export default Header
