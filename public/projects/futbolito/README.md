# Galería de Imágenes - Proyecto El Futbolito

## Instrucciones para subir imágenes

Para agregar las imágenes del proyecto "Proyecto El Futbolito" a la galería, sigue estos pasos:

### 1. Formato de archivos
- Formatos admitidos: `.jpg`, `.jpeg`, `.png`, `.webp`
- Tamaño recomendado: 800x800px o mayor (formato rectangular preferido para web apps)
- Peso máximo por imagen: 2MB

### 2. Nomenclatura de archivos
Las imágenes deben nombrarse siguiendo este patrón:
```
image-1.png
image-2.png
image-3.png
...
image-8.png
```

### 3. Ubicación
Coloca todas las imágenes en esta carpeta:
```
public/projects/futbolito/
```

### 4. Orden de las imágenes sugerido
- `image-1.jpg`: Página principal/inicio
- `image-2.jpg`: Lista de canchas disponibles
- `image-3.jpg`: Formulario de reserva
- `image-4.jpg`: Calendario de reservas
- `image-5.jpg`: Panel de administración
- `image-6.jpg`: Perfil de usuario
- `image-7.jpg`: Confirmación de reserva
- `image-8.jpg`: Vista móvil/responsiva

### 5. Actualización automática
Una vez que subas las imágenes con los nombres correctos, la galería las mostrará automáticamente. Si una imagen no existe, se mostrará un placeholder con el icono de fútbol ⚽.

### 6. Vista previa
Para ver la galería, visita: `/gallery/futbolito`

### 7. Características de la galería
- ✅ Tema verde (perfecto para fútbol)
- ✅ 8 espacios para imágenes
- ✅ Modal con navegación
- ✅ Diseño responsivo
- ✅ Navegación con teclado

---

**Nota**: 
- Las imágenes se sirven desde la carpeta `public/` para mejor rendimiento
- Si una imagen no existe, se mostrará un placeholder automáticamente
- Si necesitas agregar más de 8 imágenes, será necesario modificar el archivo `src/pages/gallery/futbolito.astro` 