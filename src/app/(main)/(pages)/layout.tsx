import Navbar from '@/components/global/Navbar'
import React from 'react'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <div className=''>
        <Navbar />
        {children}
    </div>
  )
}

export default Layout