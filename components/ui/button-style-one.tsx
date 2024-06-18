import { cn } from '@/lib/utils';
import React from 'react';

const ButtonStyleOne = ({ title, className }: { title: string; className?: string }) => {
  return (
    <button
      className={cn
        ('bg-white text-black before:ease relative h-full max-w-xs lg:w-full overflow-hidden border-0 shadow-2xl before:absolute before:left-0 before:h-40 before:w-full before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-primary-800 before:transition-all before:duration-300 hover:text-white hover:shadow-primary-400 hover:before:-rotate-180 tracking-wide font-bold uppercase p-4', className)}
    >
      <span className='relative z-10'>{title}</span>
    </button>
  );
};

export default ButtonStyleOne;
