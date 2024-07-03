import Navbar from '@/components/global/Navbar'
import React from 'react'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <div 
        className='
            border-l-[1px] pb-20 h-screen
            border-muted-foreground/20
            overflow-scroll
    '>
        <Navbar />
        {children}
    </div>
  )
}

export default Layout