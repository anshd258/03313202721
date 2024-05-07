import React from 'react'
import Image from 'next/image'

function ProductCard() {
    return (
        <div className='flex w-80 h-64 flex-col px-4 py-3 justify-center items-center bg-white rounded-lg my-2 mx-3'>
            <Image />
            <div className='flex flex-col  w-full justify-start' >
                <h4 className='md:text-2xl text-xl font-semibold  '>Product Name</h4>
                <h6 className='md:text-lg text-base font-normal text-gray-600 pb-3' >product category</h6>

                <p className='text-sm  font-extralight pb-5'>
                    loren ipsum delore
                </p>
                <div className='flex flex-row justify-between pb-3'>
                    <p className='text-yellow-500'>4.5⭐</p>
                    <div className='flex flex-row items-center'>
                        <h3 className='text-green-600 text-2xl pr-1'>1233 </h3>
                        <p className='text-red-500 text-sm'> -45%</p>
                    </div>
                </div>
                <div className='flex flex-row justify-between px-1'>
                    <button className='rounded-md px-3 py-1 bg-blue-400'>Add to Cart</button>
                    <button className='rounded-md px-3 py-1 bg-green-400'>Buy Now</button>
                </div>
            </div>

        </div>
    )
}

export default ProductCard