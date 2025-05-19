import React from 'react'
import Image from 'next/image';
const page = () => {
  return (
    <section className='py-16 bg-gray-100 border-t-8 border-secondaryy'>
        <div className='container mx-auto p-4'>
            <div className='flex flex-col md:flex-row items-center'>
                <Image
                width={500}
                height={500}
                src="/gallery1.png"
                alt="imge"
                className='w-full md:w-1/2 h-auto object-cover mb-6 md:mb-0' />
              
                <div className='md:ml-6 w-full md:w-1/2'>
                    <h2 className='text-3xl font-semibold mb-2'>name</h2>
                    <p className='text-gray-600 mb-4'>desc</p>
                    <p className='text-primaryy text-lg mb-2'>category</p>
                    <p className='text-gray700 font-bold text-2xl mb-4'>5.99</p>
                    <div className='flex items-center space-x-4'>
                        <label htmlFor="quantity" className='text-gray-700'>
                            Quantity:
                        </label>
                        <input type="number"
                        id='quantity'
                        className='border border-gray-300 px-3 py-2 rounded-lg w-16 focus:outline-none focus:border-secondaryy' />
                        <p className='text-gray-700 font-bold text-xl'>
                         Total:$6.99
                        </p>

                    </div>
                    <button className='mt-6 bg-secondaryy text-white py-2 px-4 rounded-lg hover:secondaryy-dark transition duration-300'>
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default page
