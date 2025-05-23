# Galería de Imágenes - EcoEventMobile

## Instrucciones para subir imágenes

Para agregar las imágenes del proyecto EcoEventMobile a la galería, sigue estos pasos:

### 1. Formato de archivos
- Formatos admitidos: `.jpg`, `.jpeg`, `.png`, `.webp`
- Tamaño recomendado: 800x800px o mayor (formato cuadrado preferido)
- Peso máximo por imagen: 2MB

### 2. Nomenclatura de archivos
Las imágenes deben nombrarse siguiendo este patrón:
```
image-1.jpg
image-2.jpg
image-3.jpg
...
image-20.jpg
```

### 3. Ubicación
Coloca todas las imágenes en esta carpeta:
```
public/projects/ecoevent-mobile/
```

### 4. Orden de las imágenes
- `image-1.jpg`: Pantalla principal/inicio
- `image-2.jpg`: Segunda pantalla más importante
- `image-3.jpg` a `image-20.jpg`: Resto de capturas de pantalla en orden lógico de navegación

### 5. Actualización automática
Una vez que subas las imágenes con los nombres correctos, la galería las mostrará automáticamente. Si una imagen no existe, se mostrará un placeholder.

### 6. Vista previa
Para ver la galería, visita: `/gallery/ecoevent-mobile`

---

**Nota**: 
- Las imágenes se sirven desde la carpeta `public/` para mejor rendimiento
- Si una imagen no existe, se mostrará un placeholder automáticamente
- Si necesitas agregar más de 20 imágenes, será necesario modificar el archivo `src/pages/gallery/ecoevent-mobile.astro` 