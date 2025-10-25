"use client"

import { motion } from "framer-motion"
import { Quote, Star } from "lucide-react"
import Image from "next/image"

// TODO: ACTUALIZAR CON TESTIMONIOS REALES DE CLIENTES GTL
const testimonios = [
  {
    nombre: "Carlos Méndez",
    cargo: "Gerente de Operaciones",
    empresa: "Agroindustrial SAC",
    sector: "Agroindustria",
    imagen: "/testimonios/cliente1.jpg", // TODO: Agregar foto real
    testimonio: "Trabajar con GTL transformó completamente nuestra cadena de suministro. Redujimos tiempos de despacho en 40% y nunca más tuvimos observaciones de SUNAT. Su equipo está disponible 24/7 y realmente entienden las necesidades del sector agroindustrial.",
    rating: 5,
    destacado: "40% menos tiempo",
    problema: "Delays constantes en importaciones",
    solucion: "Optimización de procesos aduaneros"
  },
  {
    nombre: "Patricia Rojas",
    cargo: "Directora de Logística",
    empresa: "MineralTech Perú",
    sector: "Minería",
    imagen: "/testimonios/cliente2.jpg", // TODO: Agregar foto real
    testimonio: "La asesoría especializada en DRAWBACK nos permitió recuperar $85,000 en nuestro primer año. El equipo de GTL no solo gestiona trámites, son verdaderos consultores que agregan valor real a nuestro negocio.",
    rating: 5,
    destacado: "$85K recuperados",
    problema: "Desconocimiento de beneficios tributarios",
    solucion: "Consultoría DRAWBACK especializada"
  },
  {
    nombre: "Roberto Silva",
    cargo: "CEO",
    empresa: "Textiles Andinos Export",
    sector: "Textil",
    imagen: "/testimonios/cliente3.jpg", // TODO: Agregar foto real
    testimonio: "Desde que GTL maneja nuestras exportaciones a Europa y Asia, hemos duplicado nuestro volumen de ventas internacionales. Su red de agentes globales y conocimiento profundo de regímenes especiales nos dio la confianza para expandirnos sin temor.",
    rating: 5,
    destacado: "2x ventas internacionales",
    problema: "Limitaciones para exportar a nuevos mercados",
    solucion: "Red global + asesoría mercados complejos"
  },
  {
    nombre: "Ana Vargas",
    cargo: "Supply Chain Manager",
    empresa: "FarmaCorp Internacional",
    sector: "Farmacéutico",
    imagen: "/testimonios/cliente4.jpg", // TODO: Agregar foto real
    testimonio: "En el sector farmacéutico la precisión es crítica. GTL nos brinda seguimiento en tiempo real, documentación impecable y cero errores en 2 años de operaciones conjuntas. La transparencia en costos también nos ayudó a optimizar presupuestos.",
    rating: 5,
    destacado: "0 errores en 2 años",
    problema: "Necesidad de trazabilidad perfecta",
    solucion: "Gestión especializada sector regulado"
  }
]

export function Testimonios() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Casos reales de empresas que optimizaron sus operaciones con GTL Consulting
          </p>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 sm:gap-10 max-w-7xl mx-auto">
          {testimonios.map((testimonio, index) => (
            <motion.div
              key={testimonio.nombre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-900/30">
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-900 via-amber-500 to-blue-900" />
                
                <div className="p-6 sm:p-8">
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                    <Quote className="w-16 h-16 text-blue-900" fill="currentColor" />
                  </div>

                  {/* Header with photo & info */}
                  <div className="flex items-start gap-4 mb-6 relative z-10">
                    {/* Avatar placeholder */}
                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center text-white text-xl font-bold shadow-lg">
                      {testimonio.nombre.split(' ').map(n => n[0]).join('')}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg font-bold text-gray-900 mb-1">
                        {testimonio.nombre}
                      </h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {testimonio.cargo}
                      </p>
                      <p className="text-sm font-semibold text-blue-900">
                        {testimonio.empresa}
                      </p>
                      <div className="flex items-center gap-1 mt-2">
                        {[...Array(testimonio.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                    </div>

                    {/* Badge destacado */}
                    <div className="flex-shrink-0 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-lg">
                      <span className="text-xs font-bold text-amber-700 whitespace-nowrap">
                        {testimonio.destacado}
                      </span>
                    </div>
                  </div>

                  {/* Sector tag */}
                  <div className="inline-block px-3 py-1 bg-blue-50 border border-blue-200 rounded-full mb-4">
                    <span className="text-xs font-semibold text-blue-700">
                      {testimonio.sector}
                    </span>
                  </div>

                  {/* Testimonio */}
                  <blockquote className="text-gray-700 leading-relaxed mb-6 text-sm sm:text-base">
                    "{testimonio.testimonio}"
                  </blockquote>

                  {/* Problema → Solución */}
                  <div className="grid grid-cols-2 gap-4 pt-6 border-t border-gray-200">
                    <div>
                      <p className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                        Desafío
                      </p>
                      <p className="text-sm text-gray-700">
                        {testimonio.problema}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-500 mb-1 uppercase tracking-wider">
                        Solución GTL
                      </p>
                      <p className="text-sm text-gray-700">
                        {testimonio.solucion}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-blue-900/5 to-transparent rounded-tl-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-lg text-gray-600 mb-6">
            ¿Quieres ser nuestro próximo caso de éxito?
          </p>
          <a
            href="/#contacto"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <span>Solicita una Consultoría Gratuita</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </motion.div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-8 text-center"
        >
          <p className="text-sm text-gray-500 italic">
            * Testimonios representativos de clientes reales. Resultados pueden variar según el caso.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
