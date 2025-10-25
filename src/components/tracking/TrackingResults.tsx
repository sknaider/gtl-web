'use client';

import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Clock, 
  FileText, 
  Package, 
  Shield, 
  Truck,
  User,
  Mail,
  Phone,
  Download
} from 'lucide-react';

interface TrackingResultsProps {
  operationNumber: string;
}

// Estados de ejemplo - Actualizar con datos reales
const trackingData = {
  operacion: 'GTL-2025-00123',
  tipo: 'Importación Definitiva',
  aduana: 'Callao Marítimo',
  canal: 'verde',
  ejecutivo: {
    nombre: 'Carlos Méndez',
    email: 'operacionescallao@gtl.pe',
    telefono: '+51 972 094 730'
  },
  estados: [
    {
      nombre: 'Documentos Recibidos',
      fecha: '2025-01-15 09:30',
      completado: true,
      descripcion: 'Documentación completa recibida y en revisión',
      icon: FileText
    },
    {
      nombre: 'Revisión Documental Completada',
      fecha: '2025-01-15 14:20',
      completado: true,
      descripcion: 'Documentación verificada sin observaciones',
      icon: CheckCircle2
    },
    {
      nombre: 'Numeración de Declaración',
      fecha: '2025-01-16 10:15',
      completado: true,
      descripcion: 'DUA Nº 123-2025-10-000456 asignado',
      icon: FileText
    },
    {
      nombre: 'Presentado a SUNAT',
      fecha: '2025-01-16 11:00',
      completado: true,
      descripcion: 'Declaración presentada correctamente',
      icon: Shield
    },
    {
      nombre: 'Canal Asignado',
      fecha: '2025-01-16 15:30',
      completado: true,
      descripcion: 'Canal Verde - Sin inspección física',
      icon: CheckCircle2
    },
    {
      nombre: 'Levante Autorizado',
      fecha: '2025-01-17 08:45',
      completado: true,
      descripcion: 'Mercancía autorizada para retiro',
      icon: Package
    },
    {
      nombre: 'En Proceso de Retiro',
      fecha: '2025-01-17 10:00',
      completado: false,
      descripcion: 'Coordinando retiro con almacén',
      icon: Truck
    },
    {
      nombre: 'Operación Finalizada',
      fecha: '',
      completado: false,
      descripcion: 'Pendiente',
      icon: CheckCircle2
    }
  ],
  documentos: [
    { nombre: 'DUA Numerada', archivo: 'dua-123-2025.pdf' },
    { nombre: 'Bill of Lading', archivo: 'bl-456789.pdf' },
    { nombre: 'Factura Comercial', archivo: 'invoice-001.pdf' },
    { nombre: 'Lista de Empaque', archivo: 'packing-list.pdf' }
  ]
};

export function TrackingResults({ operationNumber }: TrackingResultsProps) {
  const canalColor = trackingData.canal === 'verde' 
    ? 'bg-green-100 text-green-800' 
    : trackingData.canal === 'naranja' 
    ? 'bg-orange-100 text-orange-800' 
    : 'bg-red-100 text-red-800';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-xl shadow-xl border border-gray-200 overflow-hidden"
    >
      {/* Header de Resultados */}
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 sm:p-8">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
              Operación: {trackingData.operacion}
            </h2>
            <div className="flex flex-wrap gap-3">
              <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                {trackingData.tipo}
              </span>
              <span className="px-3 py-1 bg-white/20 text-white text-sm rounded-full">
                {trackingData.aduana}
              </span>
              <span className={`px-3 py-1 text-sm rounded-full font-medium ${canalColor}`}>
                Canal {trackingData.canal.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-6 sm:p-8">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Timeline de Estados */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <Clock className="w-6 h-6 text-blue-900" />
              Estado de la Operación
            </h3>
            
            <div className="space-y-6">
              {trackingData.estados.map((estado, index) => {
                const Icon = estado.icon;
                const isLast = index === trackingData.estados.length - 1;
                
                return (
                  <div key={index} className="relative">
                    {/* Línea conectora */}
                    {!isLast && (
                      <div className={`absolute left-5 top-12 w-0.5 h-full ${
                        trackingData.estados[index + 1].completado 
                          ? 'bg-green-500' 
                          : 'bg-gray-300'
                      }`} />
                    )}
                    
                    <div className="flex gap-4">
                      {/* Icono */}
                      <div className={`relative z-10 flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                        estado.completado 
                          ? 'bg-green-500 text-white' 
                          : 'bg-gray-200 text-gray-400'
                      }`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      
                      {/* Contenido */}
                      <div className="flex-1 pb-6">
                        <div className="flex items-start justify-between gap-4 mb-1">
                          <h4 className={`font-semibold ${
                            estado.completado ? 'text-gray-900' : 'text-gray-500'
                          }`}>
                            {estado.nombre}
                          </h4>
                          {estado.fecha && (
                            <span className="text-sm text-gray-500 whitespace-nowrap">
                              {estado.fecha}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">
                          {estado.descripcion}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Sidebar: Info y Documentos */}
          <div className="space-y-6">
            
            {/* Ejecutivo Asignado */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <User className="w-5 h-5 text-blue-900" />
                Ejecutivo Asignado
              </h4>
              <div className="space-y-2 text-sm">
                <p className="font-medium text-gray-900">{trackingData.ejecutivo.nombre}</p>
                <a 
                  href={`mailto:${trackingData.ejecutivo.email}`}
                  className="flex items-center gap-2 text-blue-900 hover:text-blue-700 transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  {trackingData.ejecutivo.email}
                </a>
                <a 
                  href={`tel:${trackingData.ejecutivo.telefono}`}
                  className="flex items-center gap-2 text-blue-900 hover:text-blue-700 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  {trackingData.ejecutivo.telefono}
                </a>
              </div>
            </div>

            {/* Documentos */}
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-blue-900" />
                Documentos
              </h4>
              <div className="space-y-2">
                {trackingData.documentos.map((doc, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between gap-2 p-3 rounded-lg hover:bg-gray-100 transition-colors text-left group"
                  >
                    <span className="text-sm text-gray-700 group-hover:text-gray-900">
                      {doc.nombre}
                    </span>
                    <Download className="w-4 h-4 text-gray-400 group-hover:text-blue-900" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
