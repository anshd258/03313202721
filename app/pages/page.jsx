import React from 'react'
import Image from 'next/image'

function ProductPage() {
    return (
        <body className="w-full h-screen  bg-slate-300  flex justify-center ">
            <div className='flex flex-col w-full h-full justify-between '>
                <Image />
                <div className='flex flex-col py-16 '>
                    <div className='flex flex-col  justify-start mx-3 md:mx-16' >
                        <h4 className='md:text-6xl text-xl font-semibold pb-3 '>Product Name</h4>
                        <h6 className='md:text-2xl text-base font-normal text-gray-600 pb-6' >product category</h6>

                        <p className='text-sm md:text-lg  font-extralight pb-5'>
                            loren ipsum delore
                        </p>
                        <div className='flex flex-row justify-between pb-3 mr-12'>
                            <p className='text-yellow-500'>4.5⭐</p>
                            <div className='flex flex-row items-center'>
                                <h3 className='text-green-600 text-2xl md:text-4xl pr-1'>1233 </h3>
                                <p className='text-red-500 text-sm md:text-xl'> -45%</p>
                            </div>
                        </div>
                        <div className='flex flex-row  px-3 md:justify-center justify-between'>
                            <button className='rounded-md md:px-7 px-10 py-1 md:py-3 bg-blue-400 md:mr-36'>Add to Cart</button>
                            <button className='rounded-md md:px-7 px-10 py-1 md:py-3 bg-green-400 md:ml-36'>Buy Now</button>
                        </div>
                    </div>
                </div>

            </div>


        </body>
    )
}

export default ProductPage