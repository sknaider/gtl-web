"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Ship, Package, Globe, TrendingUp } from "lucide-react"

export function ServiciosHero() {
  return (
    <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      {/* Decorative blobs */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl" />
      
      {/* Floating icons decoration */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-32 right-20 opacity-10 hidden xl:block"
      >
        <Ship className="w-32 h-32 text-amber-400" />
      </motion.div>

      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-20 left-20 opacity-10 hidden xl:block"
      >
        <Package className="w-28 h-28 text-blue-400" />
      </motion.div>
      
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/20 rounded-full mb-6"
            >
              <TrendingUp className="w-4 h-4 text-amber-400" />
              <span className="text-sm font-semibold text-amber-400">Comercio Exterior Profesional</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Nuestros <span className="text-amber-500">Servicios</span>
            </h1>
            
            <div className="w-24 h-1 mb-8 bg-gradient-to-r from-amber-400 to-amber-600" />
            
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed mb-8">
              Soluciones integrales en comercio exterior y despacho aduanero. 
              Optimizamos tus operaciones con experiencia, rapidez y cumplimiento total.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="text-2xl font-bold text-amber-400 mb-1">7+</div>
                <div className="text-xs text-gray-400">Años</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="text-2xl font-bold text-amber-400 mb-1">5</div>
                <div className="text-xs text-gray-400">Servicios</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
              >
                <div className="text-2xl font-bold text-amber-400 mb-1">24/7</div>
                <div className="text-xs text-gray-400">Soporte</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Image Container */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            {/* Main image container with glow effect */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-amber-500/20 rounded-2xl blur-2xl" />
              
              {/* Image */}
              <div className="relative rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                <Image
                  src="/servicios-hero.jpg"
                  alt="Servicios de comercio exterior GTL"
                  width={600}
                  height={400}
                  className="object-cover w-full h-[400px]"
                  priority
                />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent" />
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute -top-6 -right-6 bg-gradient-to-br from-amber-500 to-amber-600 text-blue-900 px-6 py-3 rounded-2xl shadow-2xl border-4 border-white/20"
            >
              <div className="text-center">
                <div className="text-2xl font-bold">99%</div>
                <div className="text-xs font-semibold">Sin errores</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
