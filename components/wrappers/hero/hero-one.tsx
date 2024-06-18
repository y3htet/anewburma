"use client"
import Container from '@/components/ui/container'
import React, { useState } from 'react'
import Carousel from '../carousel/carousel'
import Thumball from '../thumball/thumball'
import { hero } from '@/constants/index'

const HeroOne = () => {
    const [background, setBackground] = useState(hero[0].image) // Corrected syntax
    return (
        <section className='w-screen h-screen overflow-hidden -mt-[72px] relative bg-gray-800 text-white'>
        
            {/* Carousel */ }
            <Carousel hero={hero} background={background}/>

            {/* Thumball */ }
            <Thumball hero={hero} setBackground={setBackground} />
        </section>
    )
}

export default HeroOne
