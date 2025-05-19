import React from 'react';
import Image from 'next/image';
const AboutPage = () => {
  return (
    <div className="bg-gray-100 border-t-8 border-secondary">
      <div className="container mx-auto py-16 px-4">
        <h1 className="text-3xl md:text-4xl text-center font-bold mb-8">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <Image
              src="https://images.pexels.com/photos/5465057/pexels-photo-5465057.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="About Us"
             
              width={500}
              height={500}
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>
          <div className="text-gray-800">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Welcome to TwoWheels!
            </h2>
            <p className="mb-4">
            Welcome to TwoWheels, your ultimate destination for everything related to bikes and cycling. Our platform is designed to unite cycling enthusiasts from around the globe, enabling them to share their biking experiences, trade components, and explore new biking trends.
            </p>
            <p className="mb-4">
            Whether you&apos;re a seasoned cyclist looking to enhance your bike collection or someone who simply enjoys the thrill of riding, TwoWheels has something exceptional in store for you. Our community is founded on trust, camaraderie, and a mutual passion for bikes.
            </p>
            <p className="mb-4">
            Whether you&apos;re an avid biker searching for ways to expand your gear or an individual who appreciates top-notch biking equipment, TwoWheels caters to your needs. Our community thrives on trust, mutual respect, and a shared enthusiasm for cycling.
            </p>
            <p className="mb-4">
            Whether you&apos;re a dedicated bike enthusiast aiming to grow your collection or someone who savors the world of cycling, TwoWheels is tailored to suit your preferences. Our community is built on a foundation of trust, respect, and a collective adoration for all things related to bikes.
            </p>
            <p className="mb-4">
            Whether you&apos;re a biking aficionado interested in expanding your collection or an individual who values high-quality biking essentials, TwoWheels offers something remarkable for you. Our community is underpinned by trust, respect, and a shared passion for biking.
            </p>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;