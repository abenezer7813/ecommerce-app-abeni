'use client'

import { useState } from "react";
import Image from "next/image";


const HeroSection = () => {
  const images=[
   './bike1.jpeg',
   './bike2.jpeg',
   './bike3.jpeg',
  ]
  
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const onClickHandler=(index:number)=>{
   if (index>=2) {
    
     setCurrentImageIndex(0);
   } else {
     setCurrentImageIndex(currentImageIndex+1);
   }
  }
 const handleImageIndex = (index:number) => {
  setCurrentImageIndex(index)
 }
  return (
    <section className="relative overflow-hidden">
      <div className="w-full h-[800px] md:h-[900px] bg-gray-900" 
      >
     <div onClick={()=>onClickHandler(currentImageIndex)} className="absolute top-0 left-0 w-full h-full bg-black opacity-60">

      </div>
      <Image
      className="object-cover w-full h-full" 
      width={1}
      height={1}
      alt="Hero Background"
      src={images[currentImageIndex]}/>
     
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex space-x-2 mb-6">
      {images.map((_,index)=>(
        <button  
        key={index}
        onClick={()=>handleImageIndex(index)}
        className={`w-3 h-3 rounded-full bg-gray-400 ${
          currentImageIndex === index && 'bg-white' }`}>

          </button>
      ))}
      </div>
      <div onClick={()=>onClickHandler(currentImageIndex)} className="absolute top-0 left-0 w-full h-[600px] mdh-[700px] border-t-8 border-amber-500 "></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-white text-center z-10">
      <h1 className="text-5xl md:text-6xl font-bold mb-6">
        Two Wheels
      </h1>
      <p className="text-xl md:text-2xl mb-10 text-secondaryy">
        Discover The latest Cycling Trends
      </p>
      <button className="bg-secondaryy text-black px-6 py-3 rounded-full hover:bg-gray-300 transition duration-300">
        Shop Now
      </button>
      </div>

    </section>
  )
}

export default HeroSection
