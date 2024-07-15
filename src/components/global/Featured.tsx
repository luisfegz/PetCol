import React from 'react'
import Center from './Center'
import Wrapper from './Featured/Wrapper'

type Props = {}

function Featured({}: Props) {
  return (
    <div className='bg-black'>
        <Center>
            <Wrapper>
                <div className='flex items-center'>
                    <div>
                        <h1 className='font-bold mb-2 text-lg text-white'>Example of Product</h1>
                        <p className='text-[.8rem]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio, repudiandae?</p>
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