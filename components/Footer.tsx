import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container-custom py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Image 
              src="/images/logo.png" 
              alt="Salonique Logo" 
              width={120} 
              height={32}
              className="h-8 w-auto mr-4"
            />
            <p className="text-gray-600 text-sm">
              Softwarelösungen für Health & Beauty
            </p>
          </div>
          
          <nav className="flex space-x-6">
            <Link 
              href="/impressum" 
              className="text-gray-600 hover:text-primary text-sm transition-colors duration-200"
            >
              Impressum
            </Link>
            <Link 
              href="/datenschutz" 
              className="text-gray-600 hover:text-primary text-sm transition-colors duration-200"
            >
              Datenschutz
            </Link>
            <a 
              href="mailto:info@salonique.de" 
              className="text-gray-600 hover:text-primary text-sm transition-colors duration-200"
            >
              Kontakt
            </a>
          </nav>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-gray-500 text-xs">
            © {new Date().getFullYear()} Salonique. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
}