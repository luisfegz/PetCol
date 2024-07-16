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
                                <button className="inline-flex h-8 text-sm animate-shimmer items-center justify-center z-40
                                        rounded-md border border-zinc-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                                        bg-[length:200%_100%] px-1.5 font-normal md:font-medium text-slate-100 transition-colors focus:outline-none 
                                        focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
                                    "
                                >
                                    Leer más
                                </button>
                            </div>         
                        {/* <------------------------------------------------------------ Button with functions of add to cart REMEMBER -----------------------------------------------------------------------------------------------> */}
                            <div className='mt-6 space-x-1.5 md:space-x-4'>
                                <button className="inline-flex h-8 text-sm animate-shimmer items-center justify-center z-40
                                        rounded-md border border-zinc-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] 
                                        bg-[length:200%_100%] px-1.5 font-normal md:font-medium text-slate-100 transition-colors focus:outline-none 
                                        focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50
                                    "
                                >
                                    Añadir <CartIcon /> 
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