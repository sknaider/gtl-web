# 📋 GUÍA DE ACTUALIZACIÓN - PÁGINA TRACKING

## 🎯 ARCHIVOS CON DATOS DE EJEMPLO A ACTUALIZAR

### **1. TrackingResults.tsx**
**Ubicación:** `src/components/tracking/TrackingResults.tsx`

**Líneas 18-77** - Objeto `trackingData`

#### **Datos a Personalizar:**

**A) Ejecutivo Asignado (Línea 24-28):**
```typescript
ejecutivo: {
  nombre: 'Tu Nombre Real',
  email: 'operacionescallao@gtl.pe',
  telefono: '+51 972 094 730'
}
```

**B) Estados Timeline (Línea 30-65):**
```typescript
estados: [
  {
    nombre: 'Nombre del Estado',
    fecha: 'YYYY-MM-DD HH:MM',
    completado: true/false,
    descripcion: 'Descripción del estado',
    icon: IconName // FileText, CheckCircle2, Package, etc.
  },
  // Agregar/eliminar estados según tu proceso
]
```

**Estados Actuales (8 totales):**
1. Documentos Recibidos
2. Revisión Documental Completada
3. Numeración de Declaración
4. Presentado a SUNAT
5. Canal Asignado
6. Levante Autorizado
7. En Proceso de Retiro
8. Operación Finalizada

**C) Documentos Descargables (Línea 67-72):**
```typescript
documentos: [
  { nombre: 'Nombre Documento', archivo: 'archivo.pdf' },
  // Agregar/eliminar según necesites
]
```

---

### **2. TrackingForms.tsx**
**Ubicación:** `src/components/tracking/TrackingForms.tsx`

**Línea 58-67** - Dropdown Regímenes:
```typescript
<option value="codigo">Nombre del Régimen</option>
```

**Regímenes Actuales:**
- Importación Definitiva
- Exportación Definitiva
- Drawback
- Admisión Temporal
- Reimportación
- Reexportación

**Línea 77-86** - Dropdown Aduanas:
```typescript
<option value="codigo">Nombre Aduana</option>
```

**Aduanas Actuales:**
- Callao Marítimo
- Callao Aéreo
- Paita
- Mollendo
- Ilo
- Tumbes

---

## 🔌 INTEGRACIÓN CON BACKEND (Futuro)

### **Conectar a API Real:**

**En TrackingForms.tsx** - Reemplazar función `handleOperationSearch`:

```typescript
const handleOperationSearch = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch(`/api/tracking/${operationNumber}`);
    const data = await response.json();
    setTrackingData(data); // Actualizar estado con datos reales
    setShowResults(true);
  } catch (error) {
    console.error('Error al consultar operación:', error);
  }
};
```

**Crear API Route:** `src/app/api/tracking/[id]/route.ts`

---

## 📝 FORMATOS RECOMENDADOS

### **Números de Operación GTL:**
- Formato sugerido: `GTL-YYYY-NNNNN`
- Ejemplo: `GTL-2025-00123`

### **Fechas:**
- Formato: `YYYY-MM-DD HH:MM`
- Ejemplo: `2025-01-15 09:30`

### **Canales SUNAT:**
- `verde` - Sin inspección física
- `naranja` - Revisión documental
- `rojo` - Inspección física completa

---

## 🎨 COLORES CANAL (Ya Configurados)

```typescript
const canalColor = trackingData.canal === 'verde' 
  ? 'bg-green-100 text-green-800'    // Canal Verde
  : trackingData.canal === 'naranja' 
  ? 'bg-orange-100 text-orange-800'  // Canal Naranja
  : 'bg-red-100 text-red-800';       // Canal Rojo
```

---

## 🔧 ICONOS DISPONIBLES (Lucide React)

Ya importados en TrackingResults.tsx:
- `FileText` - Documentos
- `CheckCircle2` - Completado
- `Package` - Mercancía
- `Shield` - SUNAT/Seguridad
- `Truck` - Transporte
- `Clock` - En proceso
- `User` - Usuario/Ejecutivo
- `Mail` - Email
- `Phone` - Teléfono
- `Download` - Descarga

Para agregar más iconos: https://lucide.dev/icons/

---

## ⚡ TESTING LOCAL

```bash
# Iniciar servidor desarrollo
npm run dev

# Abrir navegador
http://localhost:3000/tracking

# Probar búsqueda con:
GTL-2025-00123
```

---

## 🚀 DEPLOY A PRODUCCIÓN

Después de actualizar datos:

```bash
# Build
npm run build

# Subir a servidor VPS
# (Usar comandos SCP cuando esté listo)
```

---

**ÚLTIMA ACTUALIZACIÓN:** Octubre 8, 2025  
**ESTADO:** Demo funcional con datos de ejemplo
