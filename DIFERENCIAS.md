# Checklist de Diferencias - WordPress vs Next.js

## ✅ Completado
- [x] Fuente Hoefler
- [x] CSS completo copiado
- [x] Estructura HTML base
- [x] Header con clases originales
- [x] Footer
- [x] Colores (negro #000000, crema #FCF7EF)

## ⚠️ Posibles diferencias actuales

### 1. Estructura de secciones
- [ ] Verificar que `.home-page` envuelva TODO
- [ ] Sección `.whoweare` con estructura exacta
- [ ] Sección `.foodritestheatre` con estructura exacta
- [ ] Sección `.privateevents` con estructura exacta

### 2. FOOD RITES THEATRE
**WordPress original tiene:**
```html
<section id="foodritestheatre">
<div class="foodritestheatre">
```

**Actualmente tenemos lo mismo** ✓

### 3. Animaciones
- WordPress usa: `class="wow animate__animated animate__fadeInUp"`
- Nosotros usamos: Framer Motion con `{...fadeInUp}`
- **Esto puede causar diferencias en timing/velocidad**

### 4. Elementos faltantes
- [ ] Clases específicas en spans del FOOD RITES THEATRE
- [ ] IDs específicos en elementos
- [ ] Atributos rel="preload" en video

## 🔍 Para verificar
1. Abrir http://localhost:3001
2. Comparar visualmente con el WordPress original
3. Revisar:
   - Espaciado
   - Tamaños de fuente
   - Posicionamiento
   - Colores

## Diferencias conocidas (por diseño)
- React/Next.js en lugar de PHP
- Framer Motion en lugar de WOW.js
- No hay jQuery (no es necesario)

