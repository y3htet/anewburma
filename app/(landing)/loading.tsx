import React from "react";
import Image from 'next/image';

export default function Loading() {
    return (
        <div 
            className='relative min-h-screen w-full flex justify-center items-center'>
      <Image 
             src="/images/wwsp.jpg" 
            className="absolute h-screen w-screen opacity-50 bg-cover object-cover"
        width={1000}
        height={1000}
        alt="background loading"
      />
      <Image 
        className="animate-pulse "
        src="/logo/anb.png" 
        width={200}
        height={200}
        alt="logo loading"
      />
    </div>
    )
}
