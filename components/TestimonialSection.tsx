import React from 'react'
import Image from 'next/image'
const TestimonialSection = () => {

  const testimonials = [
    {
      image: 'https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'John Doe',
      text: "I'm really satisfied with the product. It exceeded my expectations!",
    },
    {
      image: 'https://images.pexels.com/photos/2228561/pexels-photo-2228561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Jane Smith',
      text: "The customer service is top-notch. They went above and beyond to help me.",
    },
    {
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Alex Johnson',
      text: 'The quality and value for the price is unmatched. Highly recommended!',
    },
    {
        image: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        name: 'John Doe',
        text: "I'm really satisfied with the product. It exceeded my expectations!",
      },
      {
        image: 'https://images.pexels.com/photos/3993256/pexels-photo-3993256.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        name: 'Jane Smith',
        text: "The customer service is top-notch. They went above and beyond to help me.",
      },
      {
        image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        name: 'Alex Johnson',
        text: 'The quality and value for the price is unmatched. Highly recommended!',
      },
  ];
   
  return (
   <section className='py-16 bg-gray-100'>
        <div className='container mx-auto px-4'>
          <h1 className='text-3xl md:text-4xl font-light text-center mb-8'>Testimonies</h1>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {testimonials.map((testimonies,index)=>(
              <div key={index}
              className='bg-white p-6 rounded-lg shadow-md p transition-transform duration-300 hover:scale-105 cursor-pointer'>
                <div className='flex items-center mb-4'>
                  <Image
                  width={50}
                  height={50}
                  src={testimonies.image}
                  alt={testimonies.name}
                  className='w-12 h-12 object-cover rounded-full mr-4' />
                
                <h3 className='text-lg font-semibold'>{testimonies.name}</h3>
                </div>
                <p className='text-gray-600'>{testimonies.text}</p>
              </div>
            ))}
          </div>
        </div>
   </section>
  )
}

export default TestimonialSection
