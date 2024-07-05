import React from 'react'
import Navbar from '@/components/global/Navbar';
import { LampComponentOfertas } from '@/components/global/lampOfertas';

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <main className="flex items-center justify-center flex-col">
        <Navbar />
        <section className="w-full mt-0 inset-0 h-screen">
          <LampComponentOfertas />
        </section>
      </main>
    </>
  )
}

export default page