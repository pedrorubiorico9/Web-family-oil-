
import React from 'react';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className={`text-2xl font-serif font-bold transition-colors ${scrolled ? 'text-olive-900' : 'text-white'}`}>
          Esencia del Sur
        </a>
        
        <div className="hidden md:flex space-x-10 text-sm font-medium uppercase tracking-widest">
          {['Historia', 'Tienda', 'Opiniones', 'Blog'].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`hover:opacity-60 transition-opacity ${scrolled ? 'text-olive-900' : 'text-white'}`}
            >
              {item}
            </a>
          ))}
        </div>

        <button className={`px-6 py-2 border rounded-full text-sm font-medium transition-all ${scrolled ? 'border-olive-900 text-olive-900 hover:bg-olive-900 hover:text-white' : 'border-white text-white hover:bg-white hover:text-olive-900'}`}>
          Contacto
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
