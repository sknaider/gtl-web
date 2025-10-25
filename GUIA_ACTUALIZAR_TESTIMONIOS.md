# 📝 GUÍA: Actualizar Testimonios con Datos Reales

## 📍 ARCHIVO A EDITAR
```
src/components/nosotros/Testimonios.tsx
Líneas 7-71: Array testimonios
```

## 🎯 DATOS A RECOPILAR POR CADA TESTIMONIO

### **Por cada cliente necesitas:**

1. **Información personal:**
   - Nombre completo
   - Cargo/puesto
   - Empresa
   - Sector (Agroindustria, Minería, Textil, etc.)
   - Foto (opcional pero recomendado)

2. **Testimonio:**
   - Texto del testimonio (3-5 líneas)
   - Rating (1-5 estrellas, normalmente 5)

3. **Métricas destacadas:**
   - Resultado cuantificable (ej: "40% menos tiempo", "$85K recuperados")
   - Problema que tenían antes
   - Solución que GTL proporcionó

---

## 📋 PLANTILLA PARA RECOPILAR INFO

**Envía esto a cada cliente para obtener testimonio:**

```
Hola [Nombre],

Estamos actualizando nuestra web y nos encantaría incluir tu experiencia trabajando con GTL. ¿Podrías ayudarnos con lo siguiente?

1. Tu cargo/puesto actual: _____
2. Empresa: _____
3. Sector: _____
4. Foto profesional: (adjuntar o enviar después)

5. Cuéntanos en 3-5 líneas: ¿Cómo GTL ayudó a tu empresa?

6. ¿Qué desafío/problema tenías antes de trabajar con nosotros?

7. ¿Qué resultado concreto logramos juntos? (ej: reducción de tiempos, ahorro en costos, etc.)

¡Muchas gracias!
```

---

## 💻 CÓMO EDITAR EL CÓDIGO

### **OPCIÓN 1: Editor de texto simple**

Abre el archivo y busca esta sección:

```typescript
const testimonios = [
  {
    nombre: "Carlos Méndez",  // ← Cambiar aquí
    cargo: "Gerente de Operaciones",  // ← Cambiar aquí
    // ... etc
```

### **OPCIÓN 2: Copiar estructura completa**

Cada testimonio sigue esta estructura:

```typescript
{
  nombre: "NOMBRE COMPLETO",
  cargo: "CARGO/PUESTO",
  empresa: "NOMBRE EMPRESA",
  sector: "SECTOR (Agroindustria/Minería/Textil/etc)",
  imagen: "/testimonios/cliente1.jpg",
  testimonio: "TEXTO DEL TESTIMONIO AQUÍ. 3-5 LÍNEAS MÁXIMO.",
  rating: 5,
  destacado: "MÉTRICA CLAVE (ej: 40% menos tiempo)",
  problema: "PROBLEMA QUE TENÍAN",
  solucion: "SOLUCIÓN GTL"
}
```

---

## 📸 SOBRE LAS FOTOS

**Si tienes fotos:**
1. Guardar en: `public/testimonios/cliente1.jpg`
2. Actualizar: `imagen: "/testimonios/cliente1.jpg"`

**Si NO tienes fotos:**
- Dejar como está
- Se mostrará avatar con iniciales (automático)

---

## 🎨 DISEÑO INCLUIDO

Cada testimonio muestra:
- ✅ Avatar con iniciales (si no hay foto)
- ✅ 5 estrellas rating
- ✅ Badge con métrica destacada
- ✅ Sector tag
- ✅ Testimonio completo
- ✅ Problema → Solución GTL

---

## 🔢 ¿CUÁNTOS TESTIMONIOS?

**Recomendado:** 3-4 testimonios (actualmente hay 4 ejemplos)

**Si tienes más:**
- Agregar más objetos al array
- Seguir misma estructura

**Si tienes menos:**
- Eliminar los que sobran
- Mínimo 2 testimonios recomendado

---

## ⚠️ TIPS IMPORTANTES

1. **Testimonios cortos:** 3-5 líneas máximo
2. **Métricas específicas:** Números reales > adjetivos genéricos
3. **Diversidad de sectores:** Mostrar diferentes industrias
4. **Problemas reales:** Casos con los que otros se identifiquen
5. **Resultados medibles:** % ahorro, tiempo reducido, $ recuperados

---

## ✅ CHECKLIST ANTES DE PUBLICAR

- [ ] Todos los nombres son reales
- [ ] Empresas verificadas (no inventadas)
- [ ] Testimonios auténticos (no copiar/pegar genéricos)
- [ ] Métricas verificables
- [ ] Fotos agregadas (si las tienes)
- [ ] Permisos de clientes obtenidos

---

## 🎯 EJEMPLO REAL BIEN HECHO

```typescript
{
  nombre: "María Torres",
  cargo: "Directora de Supply Chain",
  empresa: "Exportadora Los Andes SAC",
  sector: "Agroindustria",
  imagen: "/testimonios/maria-torres.jpg",
  testimonio: "GTL nos ayudó a certificar nuestra línea de productos orgánicos para exportación a Europa. Su conocimiento de normativas CE y FDA fue clave. Ahora exportamos a 12 países sin contratiempos.",
  rating: 5,
  destacado: "12 países alcanzados",
  problema: "Barreras regulatorias para exportar orgánicos",
  solucion: "Asesoría certificaciones internacionales"
}
```

---

**¿Dudas?** Edita un testimonio de prueba primero, verifica en localhost, luego actualiza el resto.
