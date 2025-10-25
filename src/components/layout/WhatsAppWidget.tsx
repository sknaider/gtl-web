"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"

export function WhatsAppWidget() {
  // TODO: Actualizar número si es diferente
  const phoneNumber = "+51972094730" // Sin espacios ni guiones
  const message = "Hola, me gustaría solicitar información sobre sus servicios de comercio exterior." // Mensaje predefinido opcional
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
        aria-label="Contactar por WhatsApp"
      >
        {/* Botón circular con icono */}
        <div className="flex items-center justify-center w-16 h-16 rounded-full">
          <MessageCircle className="w-8 h-8" fill="currentColor" />
        </div>

        {/* Texto que aparece al hover - Desktop only */}
        <div className="hidden lg:group-hover:flex items-center pr-6 overflow-hidden transition-all duration-300">
          <span className="font-semibold whitespace-nowrap">
            ¿Necesitas ayuda?
          </span>
        </div>

        {/* Pulse animation */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-75 animate-ping" />
        
        {/* Badge notificación (opcional) */}
        <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white shadow-lg">
          1
        </span>
      </a>

      {/* Tooltip en mobile */}
      <div className="lg:hidden absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        <div className="bg-gray-900 text-white text-sm py-2 px-4 rounded-lg shadow-xl whitespace-nowrap">
          Chatea con nosotros
          <div className="absolute top-full right-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-900" />
        </div>
      </div>
    </motion.div>
  )
}
