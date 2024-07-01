import { CarouselTypes } from '@/types'
import React from 'react'
import ThumballItem from '../thumball/thumball-item';


const FullThumball = ({ hero, setBackground }: {
    hero: CarouselTypes []; setBackground: (value: string) => void
}) => {
  return (
    <div className='absolute w-max bottom-[50px] left-20 z-20 flex gap-5 ' >
      {
        hero && hero.map (( item, idx ) => (
          <ThumballItem 
          key={idx} 
          item={item}
          setBackground={setBackground} 
          />

        ))

      }

    </div>
  )
}

export default FullThumball 
