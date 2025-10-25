"use client"

import { motion } from "framer-motion"

export function NosotrosHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Sobre <span className="text-brand-primary">GTL Consulting</span>
          </h1>
          
          <div className="w-24 h-1 mx-auto mb-8 bg-gradient-to-r from-brand-primary to-brand-secondary" />
          
          <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Somos especialistas en comercio exterior y operaciones logísticas con 7 años 
            de experiencia conectando negocios entre Perú y el mundo, brindando soluciones 
            integrales con gestión profesional garantizada.
          </p>
        </motion.div>
      </div>
    </section>
  )
}