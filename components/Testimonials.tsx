
import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif text-olive-900">Lo que dicen de nosotros</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-10 rounded-[2rem] shadow-sm border border-olive-50 relative">
              <div className="flex text-yellow-500 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-olive-700 italic text-lg leading-relaxed mb-8">
                "{t.comment}"
              </p>
              <div className="flex items-center space-x-4">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-olive-900">{t.name}</h4>
                  <p className="text-sm text-olive-500 uppercase tracking-wide">{t.role}</p>
                </div>
              </div>
              <div className="absolute top-10 right-10 text-olive-100 opacity-20">
                <svg className="w-16 h-16 fill-current" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.899 14.915 16 16.015 16L19.015 16C19.567 16 20.015 15.552 20.015 15L20.015 11C20.015 10.448 19.567 10 19.015 10L14.017 10L14.017 4L21.015 4L21.015 15C21.015 18.866 17.881 22 14.017 22L14.017 21ZM4.017 21L4.017 18C4.017 16.899 4.915 16 6.015 16L9.015 16C9.567 16 10.015 15.552 10.015 15L10.015 11C10.015 10.448 9.567 10 9.015 10L4.017 10L4.017 4L11.015 4L11.015 15C11.015 18.866 7.881 22 4.017 22L4.017 21Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
