'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Home, MapPin, Users, Mail } from 'lucide-react'
import Image from 'next/image'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Destinations', path: '/destinations', icon: MapPin },
    { name: 'About Us', path: '/about', icon: Users },
    { name: 'Contact', path: '/contact', icon: Mail },
  ]

  return (
    <header className={`sticky top-0 z-50 bg-transparent  w-full transition-all duration-300 ${scrolled ? 'backdrop-blur-lg shadow-lg' : 'bg-transparent'} backdrop-blur-[1px]`}>
      <div className="mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2 text-2xl">
            <Image src={'/icons/logo.png'} className="hover:text-yellow-700 transition-colors duration-300" alt={''} width={50} height={50} />
          </div>

          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.path}
                    className="flex items-center px-4 py-2 rounded-md hover:bg-white/10 hover:shadow-sm transition-all duration-300 ease-in-out"
                  >
                    <item.icon className="mr-2 h-5 w-5" />
                    <span className="text-sm">{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none transition-colors duration-300"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav className="md:hidden  fixed top-[8vh] left-0  h-screen z-20 w-full bg-black/90">
          <ul className="p-4 space-y-2">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.path}
                  className="flex items-center px-4 py-2 rounded-lg text-white transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="mr-2 h-5 w-5" />
                  <span className="font-medium">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  )
}
