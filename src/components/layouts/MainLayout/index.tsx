import React, { useState, useCallback } from 'react'
import Footer from '../../features/Footer'
import Header from '../../features/Header'

export interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleHumbergerClick = useCallback(
    () => setIsMobileMenuOpen((current) => !current),
    [],
  )

  return (
    <div className="flex flex-col justify-between h-screen">
      <div className="px-4 md:px-5 lg:px-8 xl:px-44 2xl:px-96 mb-auto">
        <Header
          onHamburgerClick={handleHumbergerClick}
          isMobileMenuOpen={isMobileMenuOpen}
        />
        <div className="py-14">{children}</div>
      </div>

      <Footer />
    </div>
  )
}

export default MainLayout
