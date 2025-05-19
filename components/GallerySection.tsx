import React from 'react'
import Image from 'next/image'
const GallerySection = () => {
  const galleryImages=['gallery1.png','gallery2.png','gallery3.png','gallery4.png','gallery5.png','gallery6.png']
  return (
    <section className='py-16 bg-gray-100'>
      <div className='container mx-auto px-4'>
       <h1 className='text-3xl md:text-4xl font-light text-center mb-8'>Gallery Section</h1>
       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {galleryImages.map((image,index)=>(
          <div
          key={index}
          className='bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg'>
            <Image
            width={500}
            height={500}
            src={`/${image}`}
            alt={`Gallery Image ${index+1}`}/>
           
          </div>
        ))}
       </div>
       </div>
    </section>
  )
}

export default GallerySection
