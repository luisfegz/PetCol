import React from 'react'
import Center from './Center'
import Wrapper from './Featured/Wrapper'
import WrapperBtn from './Featured/WrapperBtn'
import CartIcon from '../icons/CartIcon'

type Props = {}

function Featured({}: Props) {
  return (
    <div className='bg-black'>
        <Center>
            <Wrapper>
                <div className='flex items-center'>
                    <div>
                        <h1 className='font-bold md:font-black mb-2 text-lg md:text-xl text-white'>Example of Product</h1>
                        <p className='text-[.8rem] md:text-[1.1rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, repudiandae?</p>
                    {/* <------------------------------------------------------------ Button Read More REMEMBER ---------------------------------------------------------------------------------------------------------------------> */}
                        <WrapperBtn>
                            <div className='mt-6 space-x-1.5 md:space-x-4'>
                                <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-light md:font-medium text-white backdrop-blur-3xl">
                                        Leer más
                                    </span>
                                </button>
                            </div>         
                        {/* <------------------------------------------------------------ Button with functions of add to cart REMEMBER -----------------------------------------------------------------------------------------------> */}
                            <div className='mt-6 space-x-1.5 md:space-x-4'>
                                <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                                    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                                    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-light md:font-medium text-white backdrop-blur-3xl">
                                        Añadir<CartIcon />
                                    </span>
                                </button>
                            </div>         
                    {/* <-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------> */}      
                        </WrapperBtn>
               
                    </div>
                </div>
                <div>
                    <img className='max-w-[100%]' src="https://luisfelipegaitan-next-ecommerce.s3.amazonaws.com/1695618706972.png" alt="Image" />
                </div>
            </Wrapper>
        </Center>
    </div>
  )
}

export default Featured