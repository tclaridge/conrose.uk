'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-xl text-foreground">
            Conrose
          </Link>
          
          <div className="flex space-x-4">
            <Link 
              href="/" 
              className={`text-foreground hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/' ? 'text-blue-600' : ''
              }`}
            >
              Home
            </Link>
            
            <Link 
              href="/contact" 
              className={`text-foreground hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium ${
                pathname === '/contact' ? 'text-blue-600' : ''
              }`}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 