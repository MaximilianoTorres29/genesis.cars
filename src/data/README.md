# Datos de vehículos

## Cómo agregar un vehículo nuevo

### 1. Imágenes

- **Carpeta:** `public/vehicles/`
- **Convención recomendada:** `{id}-1.png`, `{id}-2.png`, … (ej. `6-1.png`, `6-2.png`)
- **Alternativa:** subcarpeta por modelo: `public/vehicles/onix/1.png`, `2.png`…
- Las fotos se recortan automáticamente para centrar el vehículo (menos cielo/suelo).

### 2. Entrada en `vehicles.json`

Agregar un objeto al array con estos campos:

| Campo | Obligatorio | Descripción |
|-------|-------------|-------------|
| `id` | Sí | Identificador único (número o string). Se usa en la URL `/vehiculo/:id`. |
| `marca` | Sí | Ej: "Volkswagen", "Ford". |
| `modelo` | Sí | Ej: "T-Cross Highline Hero", "Gol Trend". |
| `año` | Sí | Año del vehículo (número). |
| `kilometraje` | Sí | Ej: "109.000 km". |
| `precio` | No | Ej: "$32.500.000" o "Consultar". |
| `imagen` | Sí | URL de la imagen principal (la que se ve en la grilla). |
| `imagenes` | Sí | Array de URLs (galería en la página de detalle). |
| `descripcion` | Sí | Texto corto que se muestra en el detalle. |
| `especificaciones` | Recomendado | Lista con iconos (ver abajo). |
| `caracteristicas` | Alternativa | Objeto clave-valor (formato antiguo, sin iconos personalizados). |

### 3. Especificaciones (recomendado)

Usar **`especificaciones`**: array de `{ "icon", "label", "value" }`. Así todas las fichas se ven igual, con iconos.

**Iconos disponibles** (valor de `icon`):

- `calendar` — Año
- `gauge` — Kilometraje
- `engine` — Motor
- `gear` — Transmisión
- `leather` — Interior / Cuero
- `sensor` — Sensores
- `screen` — Pantalla
- `document` — Transferencia / Documentación
- `price` — Precio
- `fuel` — Combustible
- `default` — Cualquier otro ítem

**Ejemplo:**

```json
{
  "id": "6",
  "marca": "Chevrolet",
  "modelo": "Onix Plus",
  "año": 2022,
  "kilometraje": "45.000 km",
  "precio": "$18.500.000",
  "imagen": "/vehicles/6-1.png",
  "imagenes": ["/vehicles/6-1.png", "/vehicles/6-2.png", "/vehicles/6-3.png"],
  "descripcion": "Texto descriptivo del auto...",
  "especificaciones": [
    { "icon": "calendar", "label": "Año", "value": "2022" },
    { "icon": "gauge", "label": "Kilometraje", "value": "45.000 km" },
    { "icon": "gear", "label": "Transmisión", "value": "Manual" },
    { "icon": "price", "label": "Precio", "value": "$18.500.000" }
  ]
}
```

### 4. Formato antiguo (`caracteristicas`)

Si no usás `especificaciones`, podés usar el objeto `caracteristicas`. La página de detalle lo muestra con iconos por defecto según la clave (combustible, transmision, puertas, color).

```json
"caracteristicas": {
  "combustible": "Nafta",
  "transmision": "Manual",
  "puertas": "5",
  "color": "Blanco"
}
```

---

## Estructura de carpetas del proyecto

```
src/
  data/
    vehicles.json   ← Listado de vehículos (editar aquí)
    README.md       ← Esta guía
  components/
    VehicleCard.jsx     ← Card en la grilla
    SpecIcon.jsx        ← Iconos de especificaciones
  pages/
    VehicleDetail.jsx   ← Página de detalle

public/
  vehicles/         ← Fotos de los autos (agregar aquí)
    1.png, 2.png …  o  6-1.png, 6-2.png …
```

Con esta estructura, para subir varios autos solo hace falta:  
1) Subir fotos a `public/vehicles/` con la convención elegida.  
2) Agregar un objeto nuevo en `vehicles.json` (con `especificaciones` si querés iconos).
