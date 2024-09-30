"use client"
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '@/components/HeroSection';
import Carousel from '@/common/Carousel';
import Image from 'next/image';
import { Heart, Star } from 'lucide-react';

const uttarakhandPlaces = [
  {
    id: 1,
    name: "Nainital",
    imageUrl: "/images/tour-img06.jpg",
  },
  {
    id: 2,
    name: "Mussoorie",
    imageUrl: "/images/tour-img07.jpg",
  },
  {
    id: 3,
    name: "Rishikesh",
    imageUrl: "/images/tour-img05.jpg",
  },
  {
    id: 4,
    name: "Haridwar",
    imageUrl: "/images/tour-img04.jpg",
  },
  {
    id: 5,
    name: "Dehradun",
    imageUrl: "/images/tour-img03.jpg",
  },
  {
    id: 6,
    name: "Auli",
    imageUrl: "/images/tour-img02.jpg",
  },
  {
    id: 7,
    name: "Auli",
    imageUrl: "/images/tour-img02.jpg",
  },
  {
    id: 8,
    name: "Auli",
    imageUrl: "/images/tour-img02.jpg",
  },
  {
    id: 9,
    name: "Auli",
    imageUrl: "/images/tour-img02.jpg",
  },
  {
    id: 10,
    name: "Auli",
    imageUrl: "/images/tour-img02.jpg",
  },
  {
    id: 11,
    name: "Auli",
    imageUrl: "/images/tour-img02.jpg",
  },
];


const travelDeals = [
  {
    id: 1,
    name: "Hotel Shanti Plaza",
    location: "New Delhi, India",
    rating: "7.5 Good",
    reviews: "510 reviews",
    price: "₹4,080",
    originalPrice: "₹6,800",
    imageUrl: "/images/tour1.jpeg",
  },
  {
    id: 2,
    name: "Anuraag Villa",
    location: "Jaipur, India",
    rating: "8.7 Fabulous",
    reviews: "157 reviews",
    price: "₹4,845",
    originalPrice: "₹5,700",
    imageUrl: "/images/tour-img02.jpg",
  },
  {
    id: 3,
    name: "Dream Inn Apartments",
    location: "Dubai, UAE",
    rating: "7.8 Good",
    reviews: "93 reviews",
    price: "₹20,460",
    originalPrice: "₹24,710",
    imageUrl: "/images/tour-img03.jpg",
  },
  {
    id: 4,
    name: "RTS Hotel Delhi Airport",
    location: "New Delhi, India",
    rating: "8.7 Fabulous",
    reviews: "116 reviews",
    price: "₹5,399",
    originalPrice: "₹10,798",
    imageUrl: "/images/tour-img04.jpg",
  },
  {
    id: 5,
    name: "Luxury Resort & Spa",
    location: "Goa, India",
    rating: "9.2 Exceptional",
    reviews: "203 reviews",
    price: "₹8,500",
    originalPrice: "₹12,000",
    imageUrl: "/images/tour-img05.jpg",
  },
  {
    id: 6,
    name: "Mountain View Lodge",
    location: "Shimla, India",
    rating: "8.9 Excellent",
    reviews: "178 reviews",
    price: "₹6,200",
    originalPrice: "₹8,500",
    imageUrl: "/images/tour-img06.jpg",
  },
]
const Page: React.FC = () => {
  return (
    <div >
      <div className='relative border-b-2 border-yellow-500'>

        <Header />
        <HeroSection />
      </div>

      <div className="flex items-center flex-col justify-center text-white font-thin bg-black  ">

        <Carousel
          title="Travel Destinations"
          items={travelDeals}
          itemWidth="w-96"
          itemHeight="h-96"
          renderItem={(item) => (
            <div
              key={item.index}
              className="flex-shrink-0 w-96 bg-white/10  overflow-hidden  rounded-md transition-all duration-300 hover:shadow-md  "
            >
              <div className="relative h-48 ">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
                <button
                  className="absolute top-3 right-3 p-2 bg-black/20 rounded-full opacity-70 hover:opacity-100 transition-opacity duration-300"
                  aria-label="Add to wishlist"
                >
                  <Heart className="w-4 h-4" />
                </button>
              </div>
              <div className="p-4  bg-black/50 ">
                <div className="flex  justify-between items-start mb-2">
                  <h3 className="text-xl truncate">{item.name}</h3>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 fill-current" />
                    <span className="ml-1 text-sm font-medium ">{item.rating}</span>
                  </div>
                </div>
                <div className="flex justify-between">
                  <p className="text-sm  mb-2">{item.location}</p>
                  <p className="text-sm  mb-2">{item.reviews}</p> </div>
                <div className="flex items-baseline">
                  <span className=" font-bold text-yellow-500">{item.price}</span>
                  <span className="ml-2 text-sm text-white-500 line-through">{item.originalPrice}</span>
                </div>
              </div>
            </div>
          )}
        />

        <Carousel
          title="Explore Uttarakhand"
          items={uttarakhandPlaces}
          itemWidth="w-56"
          itemHeight="h-96"
          renderItem={(item) => (
            <div className="relative">
              <Image src={item.imageUrl} alt={item.name} width={1000} height={1000} className='h-32  ' />
              <button
                className="absolute top-3 right-3 p-2 bg-black/20 rounded-full opacity-70 hover:opacity-100 transition-opacity duration-300"
                aria-label="Add to wishlist"
              >
                <Heart className="w-4 h-4" />
              </button>
              <div className='p-2 bg-black/50'>
                <h3>{item.name}</h3>
              </div>
            </div>
          )}
        />
      </div>
      <Footer />




    </div>
  );
};

export default Page;
