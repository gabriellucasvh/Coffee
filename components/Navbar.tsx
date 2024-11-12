import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
import { Coffee, ShoppingCart } from 'lucide-react'

const Navbar = () => {
  return (
    <div className='font-sans'>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 md:px-10">
        <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
          <div className="flex items-center gap-6 md:gap-10">
            <Link href="#" className="flex items-center space-x-2">
              <span className="flex items-center gap-2 font-bold"><Coffee className="h-6 w-6 mb-1" />Coffee Shop</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link href="#about" className="text-sm font-medium transition-colors text-gray-800 hover:text-black">
                Sobre
              </Link>
              <Link href="#menu" className="text-sm font-medium transition-colors text-gray-800 hover:text-black">
                Menu
              </Link>
              <Link href="#location" className="text-sm font-medium transition-colors text-gray-800 hover:text-black">
                Localização
              </Link>
            </nav>
          </div>
          <div className="flex flex-1 items-center justify-end space-x-4">
            <Button variant="outline" className="hidden sm:flex bg-merino-700 text-white hover:bg-merino-600 hover:text-white">
              <ShoppingCart className="mr-2 h-4 w-4" /> Compre online
            </Button>
          </div>
        </div>
      </header>
    </div>
  )
}

export default Navbar