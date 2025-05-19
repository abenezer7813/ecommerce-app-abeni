'use client'
import ProductCard  from './ProductCard';
const ProductSection = () => {
const products = [
    {
      image: 'https://images.pexels.com/photos/2790148/pexels-photo-2790148.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Modern Kicker',
      description: 'Off Road Moutain Bike',
      category: 'Off Road',
      price: '$199.99',
    },
    {
      image: 'https://images.pexels.com/photos/1002748/pexels-photo-1002748.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Casual Ryder',
      description: 'Built For Relaxation And Scenerie Viewing',
      category: 'Casual Ride',
      price: '$229.99',
    },
    {
      image: 'https://images.pexels.com/photos/2909095/pexels-photo-2909095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Hippie Crusier',
      description: 'Custom Built All Purpose',
      category: 'All Purpose',
      price: '$279.99',
    },
    {
      image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Mountain Climber',
      description: 'Sleek, versatile, & just what the order ',
      category: 'Mountain Bike',
      price: '$189.99',
    },
    {
      image: 'https://images.pexels.com/photos/90454/pexels-photo-90454.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Classic Moutain Bike',
      description: 'Built Moutain Tough',
      category: 'Mountain Bike',
      price: '$274.99',
    },
    {
      image: 'https://images.pexels.com/photos/2158963/pexels-photo-2158963.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Cycle 306',
      description: 'Traditional Cycling Bike Custom Built',
      category: 'Cycling Bike',
      price: '$449.99',
    },
    {
      image: 'https://images.pexels.com/photos/5807587/pexels-photo-5807587.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Traditional Cycler',
      description: 'Traditional Cycling Bike',
      category: 'Cycling Bike',
      price: '$384.99',
    },
    {
      image: 'https://images.pexels.com/photos/2829533/pexels-photo-2829533.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      name: 'Classic Seater',
      description: 'Traditional Throw Back Classic',
      category: 'Classic',
      price: '$319.99',
    },
    
  ];

  return (
   <section className='py-16 bg-gray-100'>
    <div className='container mx-auto px-4'>
      <h1 className='text-3xl md:text-4xl font-light text-center mb-4'>
        Products
      </h1>
<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
{products.map((product, index) => (
  <ProductCard key={index} {...product} />
))}
</div>
    </div>
   </section>
  )
}

export default ProductSection
