
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";

const ChatAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState<{ role: 'user' | 'ai', text: string }[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim() || isLoading) return;

    const userMessage = message.trim();
    setMessage('');
    setHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: userMessage,
        config: {
          systemInstruction: 'Eres un experto sommelier de aceite de oliva de la marca "Esencia del Sur". Responde con elegancia, amabilidad y brevedad. Tu objetivo es educar sobre el Aceite de Oliva Virgen Extra (AOVE) y ayudar con maridajes o dudas sobre los productos de la marca (500ml y 2L).',
        }
      });

      const aiText = response.text || 'Lo siento, no he podido procesar tu duda ahora mismo.';
      setHistory(prev => [...prev, { role: 'ai', text: aiText }]);
    } catch (error) {
      setHistory(prev => [...prev, { role: 'ai', text: 'Estamos teniendo un pequeño problema técnico en la almazara. Inténtalo de nuevo.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      {isOpen ? (
        <div className="bg-white rounded-3xl shadow-2xl w-80 md:w-96 flex flex-col border border-olive-100 overflow-hidden animate-slide-up">
          <div className="bg-olive-900 p-4 text-cream-100 flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-olive-700 flex items-center justify-center">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <span className="font-serif font-bold">Experto Esencia</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-cream-100/60 hover:text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 h-80 overflow-y-auto p-4 space-y-4 bg-olive-50/30">
            {history.length === 0 && (
              <div className="text-center py-8">
                <p className="text-olive-400 text-sm italic">"¿Con qué marida mejor el aceite de cosecha temprana?"</p>
              </div>
            )}
            {history.map((h, i) => (
              <div key={i} className={`flex ${h.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${h.role === 'user' ? 'bg-olive-700 text-white' : 'bg-white text-olive-900 shadow-sm'}`}>
                  {h.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl shadow-sm animate-pulse">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-olive-300 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-olive-300 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-olive-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 bg-white border-t border-olive-100">
            <div className="relative">
              <input 
                type="text" 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Pregunta a nuestro experto..."
                className="w-full pl-4 pr-12 py-3 bg-olive-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-olive-900 outline-none"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-olive-900 text-white rounded-xl flex items-center justify-center hover:bg-olive-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-olive-900 text-cream-50 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all group"
        >
          <svg className="w-8 h-8 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          </svg>
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-cream-100"></div>
        </button>
      )}

      <style>{`
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </div>
  );
};

export default ChatAssistant;
