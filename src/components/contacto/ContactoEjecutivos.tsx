"use client"

import { motion } from "framer-motion"
import { Phone, Mail, Package, Ship, FileText, Scale } from "lucide-react"

const ejecutivos = [
  {
    nombre: "Juan Pérez Rodríguez",
    cargo: "Especialista en Importación",
    area: "Importación y Despachos",
    telefono: "+51 972 094 730",
    email: "jperez@gtl.pe",
    icono: Package,
    color: "from-blue-900 to-blue-800"
  },
  {
    nombre: "María García López",
    cargo: "Especialista en Exportación",
    area: "Exportación y Certificados",
    telefono: "+51 972 094 730",
    email: "mgarcia@gtl.pe",
    icono: Ship,
    color: "from-blue-800 to-blue-700"
  },
  {
    nombre: "Carlos López Torres",
    cargo: "Especialista en Regímenes",
    area: "Drawback y Admisión Temporal",
    telefono: "+51 972 094 730",
    email: "clopez@gtl.pe",
    icono: FileText,
    color: "from-blue-700 to-blue-600"
  },
  {
    nombre: "Ana Torres Méndez",
    cargo: "Asesora Legal Aduanera",
    area: "Asesoría y Fiscalización",
    telefono: "+51 972 094 730",
    email: "atorres@gtl.pe",
    icono: Scale,
    color: "from-blue-600 to-blue-500"
  }
]

export function ContactoEjecutivos() {
  return (
    <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Nuestro Equipo de Especialistas
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
            Profesionales dedicados listos para atender tus necesidades específicas en cada área
          </p>
          <div className="w-20 h-1 mx-auto bg-gradient-to-r from-amber-400 to-amber-600 rounded-full" />
        </motion.div>

        {/* Grid de Ejecutivos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {ejecutivos.map((ejecutivo, index) => (
            <motion.div
              key={ejecutivo.nombre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-full bg-white rounded-2xl border-2 border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-900">
                {/* Gradient top */}
                <div className={`h-2 bg-gradient-to-r ${ejecutivo.color}`} />
                
                <div className="p-6">
                  {/* Avatar con Icono */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center relative overflow-hidden">
                      <div className={`absolute inset-0 bg-gradient-to-br ${ejecutivo.color} opacity-10`} />
                      <span className="text-2xl font-bold text-gray-700 relative z-10">
                        {ejecutivo.nombre.split(' ').map(n => n[0]).join('').substring(0, 2)}
                      </span>
                    </div>
                    {/* Badge con icono */}
                    <div className={`absolute -bottom-2 left-1/2 -translate-x-1/2 p-2 bg-gradient-to-br ${ejecutivo.color} rounded-full shadow-lg`}>
                      <ejecutivo.icono className="w-4 h-4 text-amber-400" />
                    </div>
                  </div>

                  {/* Info */}
                  <div className="text-center mb-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {ejecutivo.nombre}
                    </h3>
                    <div className="text-sm font-semibold text-blue-900 mb-2">
                      {ejecutivo.cargo}
                    </div>
                    <div className="text-xs text-gray-600 px-3 py-1 bg-gray-100 rounded-full inline-block">
                      {ejecutivo.area}
                    </div>
                  </div>

                  {/* Contacto */}
                  <div className="space-y-3 pt-4 border-t border-gray-200">
                    <a 
                      href={`tel:${ejecutivo.telefono}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-900 transition-colors group/link"
                    >
                      <div className="p-2 bg-gray-100 rounded-lg group-hover/link:bg-blue-100 transition-colors">
                        <Phone className="w-3 h-3" />
                      </div>
                      <span className="text-xs">{ejecutivo.telefono}</span>
                    </a>

                    <a 
                      href={`mailto:${ejecutivo.email}`}
                      className="flex items-center gap-2 text-sm text-gray-600 hover:text-blue-900 transition-colors group/link"
                    >
                      <div className="p-2 bg-gray-100 rounded-lg group-hover/link:bg-blue-100 transition-colors">
                        <Mail className="w-3 h-3" />
                      </div>
                      <span className="text-xs break-all">{ejecutivo.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA General */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl shadow-xl">
            <div className="text-white text-center sm:text-left">
              <p className="font-semibold mb-1">¿No estás seguro con quién hablar?</p>
              <p className="text-sm text-blue-200">Llama a nuestra línea principal y te conectamos con el especialista indicado</p>
            </div>
            <a 
              href="tel:+51972094730"
              className="flex-shrink-0 px-6 py-3 bg-amber-500 hover:bg-amber-400 text-blue-900 font-bold rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
            >
              Llamar Ahora
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
