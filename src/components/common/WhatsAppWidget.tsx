'use client';

import { MessageCircle } from 'lucide-react';

export default function WhatsAppWidget() {
  // Datos GTL Consulting
  const whatsappNumber = '51972094730';
  const mensaje = '¡Hola! Quisiera información sobre servicios de agenciamiento de aduanas y comercio exterior.';
  const encodedMessage = encodeURIComponent(mensaje);
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

  return (
    <>
      {/* Botón flotante principal */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="
          fixed bottom-6 right-6 z-50
          w-14 h-14 md:w-16 md:h-16
          bg-[#25D366] hover:bg-[#20BA5A]
          rounded-full shadow-lg hover:shadow-2xl
          flex items-center justify-center
          transition-all duration-300 ease-in-out
          hover:scale-110
          group
          cursor-pointer
        "
        aria-label="Contactar por WhatsApp"
      >
        {/* Pulse animation ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20"></span>
        
        {/* Icono WhatsApp */}
        <MessageCircle 
          className="w-7 h-7 md:w-8 md:h-8 text-white relative z-10" 
          strokeWidth={2}
        />
        
        {/* Badge "Online" (opcional) */}
        <span className="
          absolute -top-1 -right-1 
          w-4 h-4 
          bg-green-400 border-2 border-white 
          rounded-full 
          animate-pulse
        "></span>
        
        {/* Tooltip desktop */}
        <span className="
          hidden lg:block
          absolute right-full mr-3 top-1/2 -translate-y-1/2
          bg-gray-900 text-white text-sm font-medium
          px-4 py-2.5 rounded-lg whitespace-nowrap
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          pointer-events-none
          shadow-xl
        ">
          ¿Necesitas asesoría? Escríbenos
          {/* Flecha del tooltip */}
          <span className="
            absolute left-full top-1/2 -translate-y-1/2
            border-8 border-transparent border-l-gray-900
          "></span>
        </span>
      </a>
    </>
  );
}
