import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Logo = () => {
  return (
    <Link href="/" className='flex items-center'>
      <Image 
        src="/logo/anb.png" 
        alt="logo"
        width={110} 
        height={54}
      />
    </Link>
  )
}

export default Logo
