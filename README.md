# ASM - Bitácora Cultural

Proyecto 2 - Arquitectura de Sistemas Multimedia | Aplicación web con React + Vite + Material UI

## Descripción

Una aplicación web moderna desarrollada con React + Vite y Material UI para gestionar contenido cultural multimedia. La aplicación incluye navegación responsiva, carga dinámica de contenido desde JSON, y un diseño adaptable para todos los dispositivos.

## Características Principales

- ✅ **Navegación responsiva con React Router** - Sistema de navegación completo con enrutamiento
- ✅ **Interfaz moderna con Material UI v5** - Componentes y diseño profesional
- ✅ **Carga dinámica de contenido desde JSON** - Sistema flexible para gestionar contenido
- ✅ **Diseño adaptable para todos los dispositivos** - Layout responsivo con sidebar y AppBar

## Tecnologías Utilizadas

- **React 19** - Framework de UI
- **Vite** - Build tool y development server
- **Material UI v5** - Biblioteca de componentes
- **React Router** - Navegación y enrutamiento
- **Emotion** - CSS-in-JS para styling

## Estructura del Proyecto

```
src/
├── components/          # Componentes reutilizables
├── hooks/              # Custom hooks (useContent)
├── layout/             # Componentes de layout (AppBar, Sidebar)
├── pages/              # Páginas de la aplicación
├── utils/              # Utilidades y configuración (theme)
└── App.jsx             # Componente principal

public/
└── data/
    └── content.json    # Contenido dinámico de la aplicación
```

## Páginas Implementadas

### 🏠 Página de Inicio
- Página de bienvenida con información del proyecto
- Lista de características principales
- Contenido cargado dinámicamente desde JSON

### 📱 Página de Media
- Galería de contenido multimedia
- Cards responsive para imágenes y videos
- Navegación por tipo de contenido (image/video)

## Instalación y Uso

### Prerrequisitos
- Node.js 18+ 
- npm o yarn

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/Kossio-01/ASM---Bitacora-Cultural.git

# Navegar al directorio
cd ASM---Bitacora-Cultural

# Instalar dependencias
npm install
```

### Desarrollo
```bash
# Iniciar servidor de desarrollo
npm run dev

# La aplicación estará disponible en http://localhost:5173
```

### Construcción
```bash
# Construir para producción
npm run build

# Previsualizar build de producción
npm run preview
```

### Linting
```bash
# Ejecutar ESLint
npm run lint
```

## Configuración de Contenido

El contenido de la aplicación se gestiona a través del archivo `/public/data/content.json`. Este archivo permite:

- Configurar textos de la aplicación
- Definir elementos de la página de inicio
- Gestionar items de la galería multimedia
- Personalizar títulos y descripciones

Ejemplo de estructura:
```json
{
  "app": {
    "title": "Bitácora Cultural",
    "subtitle": "Proyecto 2 - Arquitectura de Sistemas Multimedia"
  },
  "home": {
    "title": "Bienvenido a Bitácora Cultural",
    "description": "...",
    "features": [...]
  },
  "media": {
    "title": "Galería Multimedia",
    "items": [...]
  }
}
```

## Responsive Design

La aplicación está optimizada para diferentes tamaños de pantalla:

- **Desktop**: Layout con sidebar persistente y AppBar
- **Tablet**: Layout adaptado con navegación optimizada  
- **Mobile**: Sidebar colapsable con menú hamburguesa

## Licencia

MIT License - ver [LICENSE](LICENSE) para más detalles.
