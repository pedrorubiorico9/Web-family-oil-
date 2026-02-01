
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-olive-100 pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="md:col-span-2 space-y-6">
            <h2 className="text-3xl font-serif text-olive-900">Esencia del Sur</h2>
            <p className="text-olive-700/70 max-w-sm leading-relaxed">
              Aceite de Oliva Virgen Extra producido con amor en el corazón de Andalucía. Tradición familiar desde 1964.
            </p>
            <div className="flex space-x-4">
              {['instagram', 'facebook', 'twitter'].map(social => (
                <a key={social} href="#" className="w-10 h-10 rounded-full bg-olive-50 flex items-center justify-center text-olive-900 hover:bg-olive-900 hover:text-white transition-all">
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5 bg-current mask-contain" style={{ maskImage: `url(https://simpleicons.org/static/icons/${social}.svg)` }}></div>
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-sm text-olive-900">Navegación</h4>
            <ul className="space-y-4 text-olive-700/70">
              <li><a href="#historia" className="hover:text-olive-900 transition-colors">Nuestra Historia</a></li>
              <li><a href="#tienda" className="hover:text-olive-900 transition-colors">Tienda Online</a></li>
              <li><a href="#opiniones" className="hover:text-olive-900 transition-colors">Testimonios</a></li>
              <li><a href="#blog" className="hover:text-olive-900 transition-colors">Blog y Recetas</a></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="font-bold uppercase tracking-widest text-sm text-olive-900">Contacto</h4>
            <ul className="space-y-4 text-olive-700/70">
              <li>info@esenciadelsur.com</li>
              <li>+34 953 123 456</li>
              <li>Jaén, Andalucía, España</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-10 border-t border-olive-50 flex flex-col md:flex-row justify-between items-center text-xs text-olive-400 uppercase tracking-widest gap-4">
          <p>© 2024 Esencia del Sur. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-olive-900">Privacidad</a>
            <a href="#" className="hover:text-olive-900">Términos</a>
            <a href="#" className="hover:text-olive-900">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
