import { cn } from '@/lib/utils'
import React from 'react'

const ButtonStyleTwo = ({ title, className }: { title: string; className?: string }) => {
  return (
    <div className={cn('group relative p-4 h-full max-w-xs lg:w-full overflow-hidden border border-white bg-white text-white hover:text-black shadow-2xl transition-all before:absolute before:left-0 before:right-0 before:top-0 before:h-0 before:w-full before:bg-white before:duration-500 after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0 after:w-full after:duration-200 after:bg-white hover:text-whitehover:shadow-primary-900 hover:backdrop:h-2/4 hover:after:h-full uppercase text-center cursor-pointer ', className)} >
        <span className='relative z-10 group-hover:text-black font-bold '>

        {title}

        </span>

    </div>
  )
}

export default ButtonStyleTwo
