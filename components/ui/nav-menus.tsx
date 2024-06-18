import Link from 'next/link'
import React from 'react'
import { Menu } from 'lucide-react'

const NavMenus = () => {
  return (
    <> 
      <nav className='hidden lg:flex items-center gap-12 text-xl font-bold h-full'>
        <Link href="/" className="capitalize border-primary-800 hover:border-b-4 duration-600 h-10">
          home 
        </Link>

        <Link href="/contact" className="capitalize border-primary-800 hover:border-b-4 duration-600 h-10">
          contact  
        </Link>


        <Link href="/info" className="capitalize border-primary-800 hover:border-b-4 duration-600 h-10">
          info 
        </Link>

      </nav>

      {/* Mobile Menu */}
      <div className='lg:hidden cursor-pointer'>
        <Menu size="36" />
      </div>
    </>
  )
}

export default NavMenus
