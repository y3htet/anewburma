import { CarouselTypes } from '@/types'
import React from 'react'
import CarouselItem from './carousel-item';

const Carousel = ({ hero, background}: { hero:CarouselTypes[]; 
    background: string }) => {
  return (
    <div>
        {
            hero.slice(0,1).map((item, idx)=> (
                <CarouselItem
                key={idx} 
                item={item}
                background={background} 
                />
            ) )
        },
        
    </div>

    
  )
}

export default Carousel
