import React from 'react'
import Navbar from '@/components/global/Navbar';

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className=''>
        <div className=''>{props.children}</div>
    </div>
  )
}

export default Layout