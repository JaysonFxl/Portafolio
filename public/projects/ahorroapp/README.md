# Galería de Imágenes - AhorroAPP

## Instrucciones para subir imágenes

Para agregar las imágenes del proyecto "AhorroAPP" a la galería, sigue estos pasos:

### 1. Formato de archivos
- Formatos admitidos: `.jpg`, `.jpeg`, `.png`, `.webp`
- Tamaño recomendado: 1200x800px o mayor (formato rectangular preferido para aplicaciones web)
- Peso máximo por imagen: 2MB

### 2. Nomenclatura de archivos
Las imágenes deben nombrarse siguiendo este patrón:
```
image-1.png
image-2.png
image-3.png
image-4.png
```

### 3. Ubicación
Coloca todas las imágenes en esta carpeta:
```
public/projects/ahorroapp/
```

### 4. Orden de las imágenes sugerido
- `image-1.png`: Dashboard principal con gráficos de ahorro
- `image-2.png`: Formulario de registro de ahorros
- `image-3.png`: Historial de ahorros por país
- `image-4.png`: Estadísticas y reportes detallados

### 5. Actualización automática
Una vez que subas las imágenes con los nombres correctos, la galería las mostrará automáticamente. Si una imagen no existe, se mostrará un placeholder con el icono de dinero 💰.

### 6. Vista previa
Para ver la galería, visita: `/gallery/ahorroapp`

### 7. Características de la galería
- ✅ Tema dorado/amarillo (perfecto para aplicación de ahorros)
- ✅ 4 espacios para imágenes en grid 2x2
- ✅ Modal con navegación entre imágenes
- ✅ Diseño responsivo optimizado
- ✅ Navegación con teclado (flechas ← →)

### 8. Diseño específico para 4 imágenes
- **Grid balanceado**: 2 columnas en pantallas grandes para mejor visualización
- **Aspect ratio 4:3**: Optimizado para capturas de aplicaciones web
- **Centrado automático**: Layout centrado con max-width para mejor composición

---

**Nota**: 
- Las imágenes se sirven desde la carpeta `public/` para mejor rendimiento
- Si una imagen no existe, se mostrará un placeholder automáticamente
- El diseño está optimizado específicamente para 4 imágenes (grid 2x2)
- Si necesitas agregar más imágenes, será necesario modificar el archivo `src/pages/gallery/ahorroapp.astro` 