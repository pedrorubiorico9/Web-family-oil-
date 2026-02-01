
import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Story from './components/Story';
import Store from './components/Store';
import Shipping from './components/Shipping';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import Footer from './components/Footer';
import ChatAssistant from './components/ChatAssistant';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar scrolled={scrolled} />
      
      <main>
        <section id="hero">
          <Hero />
        </section>

        <section id="historia" className="py-20 md:py-32">
          <Story />
        </section>

        <section id="tienda" className="py-20 bg-white">
          <Store />
        </section>

        <section id="envios" className="py-16 md:py-24 bg-olive-900 text-cream-100">
          <Shipping />
        </section>

        <section id="opiniones" className="py-20 md:py-32">
          <Testimonials />
        </section>

        <section id="blog" className="py-20 md:py-32 bg-olive-50">
          <Blog />
        </section>
      </main>

      <Footer />
      
      {/* Floating Assistant Feature */}
      <ChatAssistant />
    </div>
  );
};

export default App;
