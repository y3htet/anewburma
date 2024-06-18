"use client"
import { CarouselTypes } from '@/types'
import React, { useCallback } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const ThumballItem = ({ item, setBackground }: { item: CarouselTypes; setBackground: (value: string) => void }) => {
  const handleClick = useCallback(
    (e: any) => {
      setBackground(e.target.src)
    },
    [setBackground],
  )

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "linear", delay: 2 + item.rid / 2 }}
      className='w-[150px] h-[220px] shrink-0 relative overflow-hidden rounded-xl shadow-sm shadow-white hidden lg:flex cursor-pointer '
    >
      <Image 
        unoptimized={true}
        onClick={handleClick} 
        src={item.image}
        width={150}
        height={220}
        alt="creative team"
        className="w-full h-full object-cover rounded-xl hover:scale-110 transition-all duration-800 hover:animate-pulse"
      />
      <div className='absolute inset-x-2.5 bottom-2 bg-black bg-opacity-50 p-2 rounded'>
        <div className='font-bold text-white'>
          {item.title} 
        </div>
        <div className='text-white'>
          {item.subtitle} 
        </div>
      </div>
    </motion.div>
  )
}

export default ThumballItem
