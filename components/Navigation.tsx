"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/images/logo.png" 
              alt="Salonique Logo" 
              width={40} 
              height={40}
              className="h-10 w-10"
            />
            <h1 className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Salonique
            </h1>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link 
              href="#features" 
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Features
            </Link>
            <Link 
              href="#faq" 
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              FAQ
            </Link>
            <Link 
              href="#kontakt" 
              className="text-gray-700 hover:text-primary transition-colors duration-200"
            >
              Kontakt
            </Link>
            <a 
              href="mailto:info@salonique.de" 
              className="btn-primary"
            >
              Kontakt aufnehmen
            </a>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
            aria-label="Menu öffnen"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <Link 
                href="#features" 
                className="text-gray-700 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#faq" 
                className="text-gray-700 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </Link>
              <Link 
                href="#kontakt" 
                className="text-gray-700 hover:text-primary transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Kontakt
              </Link>
              <a 
                href="mailto:info@salonique.de" 
                className="btn-primary text-center"
              >
                Kontakt aufnehmen
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}