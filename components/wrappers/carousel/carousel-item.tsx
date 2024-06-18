import { cn } from '@/lib/utils';
import { CarouselTypes } from '@/types';
import React from 'react';
import Image from 'next/image';
import Container from '@/components/ui/container';
import { motion } from 'framer-motion';
import ButtonStyleOne from '@/components/ui/button-style-one';
import ButtonStyleTwo from '@/components/ui/button-style-two';

const CarouselItem = ({ item, background }: { item: CarouselTypes; background: string }) => {
  return (
    <div className={cn('w-full absolute top-0 left-0 bottom-0 right-0 z-20 ')}>
      <Image
        unoptimized
        src={background}
        width="1000"
        height="1000"
        alt="carousel background"
        className={cn('w-full h-full object-cover absolute')}
      />
      {/* carousel content */} 
      <Container >
        <div className='absolute top-[18%] w-screen max-w-[80%] flex flex-col gap-4 '> 
        
        <motion.div 
          className='font-thin text-md tracking-widest uppercase leading-snug'
          initial={{
              opacity: 0,
              y: 50,
              filter: "blur(20px)"
          }}
          animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0)"
          }}
          transition={{
            duration: 0.6,
            ease: "linear",
            delay: 0
          }}
        >
          {item.category}
        </motion.div>

        <motion.div 
          className='font-extrabold tracking-wide shadow-inner text-4xl md:text-6xl leading-snug uppercase'
          initial={{
              opacity: 0,
              y: 50,
              filter: "blur(20px)"
          }}
          animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0)"
          }}
          transition={{
            duration: 0.6,
            ease: "linear",
            delay: 0.2
          }}
        >
          {item.title}
        </motion.div>

        <motion.div 
          className='font-extrabold tracking-wide shadow-inner text-4xl md:text-6xl leading-snug uppercase text-primary-500'
          initial={{
              opacity: 0,
              y: 50,
              filter: "blur(20px)"
          }}
          animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0)"
          }}
          transition={{
            duration: 0.6,
            ease: "linear",
            delay: 0.4
          }}
        >
          {item.subtitle}
        </motion.div>

        <motion.div 
          className='text-lg md:text-xl/loose max-w-xs sm:max-w-2xl'
          initial={{
              opacity: 0,
              y: 50,
              filter: "blur(20px)"
          }}
          animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0)"
          }}
          transition={{
            duration: 0.6,
            ease: "linear",
            delay: 0.6
          }}
        >
          {item.content}
        </motion.div>

        <motion.div
              initial={{
               opacity: 0,
               y: 50,
               filter: "blur(20px)"
            }}
              animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0)"
            }}
              transition={{
              duration: 0.6,
              ease: "linear",
              delay: 0.8, 
              type: "spring"
            }}

            className="grid grid-cols-1 sm:grid-cols-[230px_230px] grid-rows-auto gap-4 mt-20 lg:mt-0  "
        >

          <ButtonStyleOne title={item.btn_1}  />
          <ButtonStyleTwo title={item.btn_1} className='bg-transparent ' />

        </motion.div>
         

         </div>
        
      </Container>
      {/* other carousel item content */}
    </div>
  );
};

export default CarouselItem;
