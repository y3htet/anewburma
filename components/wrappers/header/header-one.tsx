import Container from '@/components/ui/container'
import Logo from '@/components/ui/logo'
import NavMenus from '@/components/ui/nav-menus'
import Row from '@/components/ui/row'
import React from 'react'

const HeaderOne = () => {
  return (
    <header className='h-[72px] w-full z-50 relative'>
      <Container>
        <Row className='flex justify-between items-center'>
          
          {/* Logo */}
          <Logo />
         
          {/* Navigation Menus */}
          <NavMenus />
        </Row>
      </Container>
    </header>
  )
}

export default HeaderOne
