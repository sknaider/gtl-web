'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, Calendar, FileText } from 'lucide-react';
import { TrackingResults } from './TrackingResults';

export function TrackingForms() {
  const [operationNumber, setOperationNumber] = useState('');
  const [showResults, setShowResults] = useState(false);
  
  // Form 2 states
  const [regimen, setRegimen] = useState('');
  const [aduana, setAduana] = useState('');
  const [duaNumber, setDuaNumber] = useState('');
  const [fecha, setFecha] = useState('');

  const handleOperationSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (operationNumber.trim()) {
      setShowResults(true);
    }
  };

  const handleDespachoSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica de búsqueda de despachos
    console.log('Búsqueda de despachos:', { regimen, aduana, duaNumber, fecha });
  };

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Formularios principales - Layout Air France KLM */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          
          {/* FORMULARIO 1: Seguir una Operación */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gray-100 rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Seguir una Operación
            </h2>
            
            <form onSubmit={handleOperationSearch}>
              <div className="mb-6">
                <input
                  type="text"
                  value={operationNumber}
                  onChange={(e) => setOperationNumber(e.target.value)}
                  placeholder="Número de operación (ej: GTL-2025-00123)"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900 focus:ring-opacity-20 outline-none transition-all text-gray-900 placeholder-gray-400"
                  required
                />
              </div>
              
              <button
                type="submit"
                className="w-full sm:w-auto px-8 py-3 bg-gray-600 hover:bg-gray-700 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                Consultar
              </button>
            </form>
          </motion.div>

          {/* FORMULARIO 2: Consultar Despachos */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-lg p-8 border border-gray-200"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Consultar Despachos Aduaneros
            </h2>
            
            <form onSubmit={handleDespachoSearch} className="space-y-4">
              {/* Dropdown: Tipo de Régimen */}
              <div>
                <select
                  value={regimen}
                  onChange={(e) => setRegimen(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900 focus:ring-opacity-20 outline-none transition-all text-gray-900 bg-white appearance-none cursor-pointer"
                  required
                >
                  <option value="">✈️ Seleccione un régimen</option>
                  <option value="importacion">Importación Definitiva</option>
                  <option value="exportacion">Exportación Definitiva</option>
                  <option value="drawback">Drawback</option>
                  <option value="admision-temporal">Admisión Temporal</option>
                  <option value="reimportacion">Reimportación</option>
                  <option value="reexportacion">Reexportación</option>
                </select>
              </div>

              {/* Dropdown: Aduana */}
              <div>
                <select
                  value={aduana}
                  onChange={(e) => setAduana(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900 focus:ring-opacity-20 outline-none transition-all text-gray-900 bg-white appearance-none cursor-pointer"
                  required
                >
                  <option value="">🏢 Seleccione una aduana</option>
                  <option value="callao-maritimo">Callao Marítimo</option>
                  <option value="callao-aereo">Callao Aéreo</option>
                  <option value="paita">Paita</option>
                  <option value="mollendo">Mollendo</option>
                  <option value="ilo">Ilo</option>
                  <option value="tumbes">Tumbes</option>
                </select>
              </div>

              {/* Input: Número DUA/DAM */}
              <div>
                <input
                  type="text"
                  value={duaNumber}
                  onChange={(e) => setDuaNumber(e.target.value)}
                  placeholder="Número de DUA/DAM (opcional)"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900 focus:ring-opacity-20 outline-none transition-all text-gray-900 placeholder-gray-400"
                />
              </div>

              {/* Date Picker */}
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
                <input
                  type="date"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:border-blue-900 focus:ring-2 focus:ring-blue-900 focus:ring-opacity-20 outline-none transition-all text-gray-900"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3 bg-blue-900 hover:bg-blue-800 text-white font-medium rounded-lg transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Buscar Despachos
              </button>
            </form>
          </motion.div>
        </div>

        {/* Resultados Timeline */}
        {showResults && <TrackingResults operationNumber={operationNumber} />}
      </div>
    </section>
  );
}
