"use client"

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import MobileNav from './MobileNav';
import { buttonVariants } from '../ui/button';
import MaxWidthWrapper from './MaxWidthWrapper';


const NewNavbar = () => {
  return (
    <nav className='sticky h-14 inset-x-0 top-0 z-30 w-full border-b bg-black/40 backdrop-blur-lg transition-all'>
      <MaxWidthWrapper>
        <div className='flex h-14 items-center justify-between border-b'>
          <Link href='/' className='flex items-center z-40 '>
            <Image
                src="/favicon.png"
                alt="Champion Store Logo"
                width={38}
                height={38}
                className="shadow-sm"
            />
            <span className='w-full font-semibold text-black-500'></span>
            
          </Link>
          <div className='hidden items-center space-x-4 sm:flex'>
            <ul
                className='
                    flex
                    md:flex-row
                    items-center
                    gap-4
                    list-none
                '
            >
                <li>
                    <Link
                        href='/accesorios'
                        className={buttonVariants({
                            variant: 'ghost',
                            size: 'sm',
                        })}
                    >
                        Accesorios
                    </Link>
                </li>
                <li>
                    <Link
                        href='/juguetes'
                        className={buttonVariants({
                            variant: 'ghost',
                            size: 'sm',
                        })}
                    >
                        Juguetes
                    </Link>
                </li>
                <li>
                    <Link
                        href='/bienestar'
                        className={buttonVariants({
                            variant: 'ghost',
                            size: 'sm',
                        })}
                    >
                        Bienestar
                    </Link>
                </li>
            </ul>
          </div>
          <aside
              className='
                  flex
                  items-center
                  gap-4
              '
          >
            {/* Offer button (Link) */}           
            <Link 
              href='/ofertas' 
              className="
                inline-flex h-10 animate-shimmer items-center justify-center 
                rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                bg-[length:200%_100%] px-6 font-medium text-slate-100 transition-colors focus:outline-none 
                focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
              "
            >
              Ofertas
            </Link>
            {/* End Offer button */}
          </aside>
          <MobileNav />
        </div>   
      </MaxWidthWrapper>
    </nav>
  );
};

export default NewNavbar;