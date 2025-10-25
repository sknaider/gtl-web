"use client"

import { motion } from "framer-motion"
import { Target, Eye } from "lucide-react"

export function MisionVision() {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-50 to-amber-100/50 p-6 sm:p-8 rounded-2xl border border-amber-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-amber-500 rounded-lg">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Nuestra Misión</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              Brindar soluciones integrales en logística de comercio exterior y aduanas, 
              garantizando una gestión profesional con cero errores, adaptándonos a las 
              necesidades específicas de cada cliente para optimizar sus procesos operativos.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-blue-50 to-blue-100/50 p-6 sm:p-8 rounded-2xl border border-blue-200"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2.5 bg-blue-600 rounded-lg">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Nuestra Visión</h2>
            </div>
            
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
              er reconocidos como una empresa líder en logistica de comercio exterior y aduanas en 
              Perú, destacándonos por nuestra excelencia en el servicio, innovación en 
              procesos logísticos.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}