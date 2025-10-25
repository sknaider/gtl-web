"use client"

import { motion } from "framer-motion"
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { FormularioCotizacion } from "@/components/forms/FormularioCotizacion"

export function ContactoInfo() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto">
          {/* Columna Izquierda - Info de Contacto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Header */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Información de Contacto
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full mb-6" />
              <p className="text-gray-600">
                Estamos aquí para ayudarte con todas tus necesidades de comercio exterior.
              </p>
            </div>

            {/* Cards de Contacto */}
            <div className="space-y-4">
              {/* Teléfono */}
              <motion.a
                href="tel:+51972094730"
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-5 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-900 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl">
                  <Phone className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-1">Teléfono</div>
                  <div className="text-lg font-bold text-gray-900">+51 972 094 730</div>
                  <div className="text-sm text-gray-600 mt-1">Lun-Vie: 8:00 AM - 6:00 PM</div>
                </div>
              </motion.a>

              {/* Email */}
              <motion.a
                href="mailto:operacionescallao@gtl.pe"
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-5 bg-white rounded-xl border-2 border-gray-200 hover:border-blue-900 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl">
                  <Mail className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-1">Email</div>
                  <div className="text-lg font-bold text-gray-900 break-all">operacionescallao@gtl.pe</div>
                  <div className="text-sm text-gray-600 mt-1">Respuesta en 24 horas</div>
                </div>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://wa.me/51972094730?text=Hola%20GTL%20Consulting"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-5 bg-white rounded-xl border-2 border-gray-200 hover:border-green-500 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-green-500 to-green-600 rounded-xl">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-1">WhatsApp</div>
                  <div className="text-lg font-bold text-gray-900">+51 972 094 730</div>
                  <div className="text-sm text-gray-600 mt-1">Disponible 24/7</div>
                </div>
              </motion.a>

              {/* Dirección */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-5 bg-white rounded-xl border-2 border-gray-200"
              >
                <div className="flex-shrink-0 p-3 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl">
                  <MapPin className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 mb-1">Oficina Principal</div>
                  <div className="text-lg font-bold text-gray-900">Av. Argentina 2345</div>
                  <div className="text-sm text-gray-600">Callao, Perú</div>
                  <div className="text-sm text-gray-600">Referencia: Cerca al Puerto del Callao</div>
                </div>
              </motion.div>

              {/* Horarios */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-5 bg-gradient-to-br from-blue-900 to-blue-800 rounded-xl text-white"
              >
                <div className="flex-shrink-0 p-3 bg-white/10 rounded-xl">
                  <Clock className="w-6 h-6 text-amber-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-amber-400 mb-2">Horarios de Atención</div>
                  <div className="space-y-1 text-sm">
                    <div><span className="font-semibold">Lunes - Viernes:</span> 8:00 AM - 6:00 PM</div>
                    <div><span className="font-semibold">Sábados:</span> 8:00 AM - 1:00 PM</div>
                    <div className="pt-2 border-t border-white/20">
                      <span className="font-semibold text-amber-400">🚨 Emergencias:</span> 24/7 vía WhatsApp
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Columna Derecha - Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <FormularioCotizacion />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
