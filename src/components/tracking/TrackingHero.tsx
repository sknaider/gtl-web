'use client';

import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export function TrackingHero() {
  return (
    <section className="relative pt-32 pb-12 bg-gradient-to-br from-blue-900 to-blue-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 mb-6 bg-amber-500 rounded-full">
            <Search className="w-8 h-8 text-white" />
          </div>
          
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Monitoreo y Seguimiento
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Consulta el estado de tus operaciones aduaneras en tiempo real. 
            Mantente informado en cada etapa del proceso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
