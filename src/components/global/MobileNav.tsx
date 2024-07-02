'use client'

import { ArrowRight, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

const MobileNav = () => {
  const [isOpen, setOpen] = useState<boolean>(false)

  const toggleOpen = () => setOpen((prev) => !prev)

  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) toggleOpen()
  }, [pathname])

  const closeOnCurrent = (href: string) => {
    if (pathname === href) {
    }
  }

  return (
    <div className='sm:hidden'>
      <Menu
        onClick={toggleOpen}
        className='relative z-50 h-5 w-5 text-zinc-700'
      />

      {isOpen ? (
        <div className='fixed animate-in slide-in-from-top-5 fade-in-20 inset-0 z-0 w-full'>
          <ul className='absolute border-b border-zinc-700 shadow-xl grid w-full gap-3 px-10 pt-20 pb-8 bg-black'>
              <>
                <li>
                  <Link
                    onClick={() =>
                      closeOnCurrent('/pricing')
                    }
                    className='flex items-center w-full font-semibold text-white'
                    href='/accesorios'>
                    Accesorios
                  </Link>
                </li>
                <li className='my-3 h-px w-full bg-zinc-700' />
                <li>
                  <Link
                    onClick={() =>
                      closeOnCurrent('/pricing')
                    }
                    className='flex items-center w-full font-semibold text-white'
                    href='/juguetes'>
                    Juguetes
                  </Link>
                </li>
                <li className='my-3 h-px w-full bg-zinc-700' />
                <li>
                  <Link
                    onClick={() =>
                      closeOnCurrent('/nosotros')
                    }
                    className='flex items-center w-full font-semibold text-white'
                    href='/binestar'>
                    Bienestar
                  </Link>
                </li>
              </>
          </ul>
        </div>
      ) : null}
    </div>
  )
}

export default MobileNav
