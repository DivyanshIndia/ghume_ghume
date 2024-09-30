"use client"
import React, { useState } from 'react';
import { Search, MapPin, CalendarDays, Users } from 'lucide-react';

const Query: React.FC = () => {
  const [destination, setDestination] = useState('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Searching for:', { destination, checkIn, checkOut, guests });
  };

  return (
    <div className="bg-black/30 px-4 sm:px-6 lg:px-8 py-6 rounded-lg shadow-lg">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Find your next excitement
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-yellow-100">
            Search deals on tours, hotels, and much more...
          </p>
        </div>
        <form onSubmit={handleSearch} className="mt-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="relative col-span-1 sm:col-span-2 lg:col-span-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500" size={20} />
              <input
                id="destination"
                name="destination"
                type="text"
                required
                className="block w-full pl-10 pr-3 py-2 border border-yellow-100 placeholder-gray-300 text-white bg-black/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition duration-150 ease-in-out"
                placeholder="Where are you going?"
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500" size={20} />
              <input
                id="check-in"
                name="check-in"
                type="date"
                required
                className="block w-full pl-10 pr-3 py-2 border border-yellow-100 placeholder-gray-300 text-white bg-black/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition duration-150 ease-in-out"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
              />
            </div>
            <div className="relative">
              <CalendarDays className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500" size={20} />
              <input
                id="check-out"
                name="check-out"
                type="date"
                required
                className="block w-full pl-10 pr-3 py-2 border border-yellow-100 placeholder-gray-300 text-white bg-black/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition duration-150 ease-in-out"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
              />
            </div>
            <div className="relative">
              <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-yellow-500" size={20} />
              <input
                id="guests"
                name="guests"
                type="number"
                required
                min="1"
                className="block w-full pl-10 pr-3 py-2 border border-yellow-100 placeholder-gray-300 text-white bg-black/40 rounded-lg focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition duration-150 ease-in-out"
                placeholder="Guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-2 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition duration-150 ease-in-out"
            >
              <Search className="inline-block mr-2 h-5 w-5" />
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Query;