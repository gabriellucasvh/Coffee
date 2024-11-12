import React from 'react'
import Link from 'next/link'
import { Instagram, Facebook, Twitter } from 'lucide-react'
const Footer = () => {
  return (
    <div>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t font-sans">
    <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 Coffee Shop. All rights reserved.</p>
    <nav className="sm:ml-auto flex gap-4 sm:gap-6">
      <Link className="text-xs hover:underline underline-offset-4" href="#">
        Termos de Serviço
      </Link>
      <Link className="text-xs hover:underline underline-offset-4" href="#">
        Privacidade
      </Link>
    </nav>
    <div className="flex items-center space-x-4">
      <Link href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
        <Instagram className="h-5 w-5" />
      </Link>
      <Link href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
        <Facebook className="h-5 w-5" />
      </Link>
      <Link href="#" className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300">
        <Twitter className="h-5 w-5" />
      </Link>
    </div>
  </footer>
  </div>
  )
}

export default Footer