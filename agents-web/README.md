# Agents

Proyecto desarrollado para demostrar el uso de agentes inteligentes en la web.

## 🚀 Tecnologías

- **React 19.1** - Biblioteca para interfaces de usuario
- **TypeScript 5.8** - Superset de JavaScript con tipado estático
- **Vite 7.0** - Herramienta de build y servidor de desarrollo
- **TailwindCSS 4.1** - Framework CSS utility-first
- **React Router Dom 7.6** - Biblioteca de enrutamiento
- **TanStack React Query 5.8** - Gestión de estado del servidor y caché
- **Radix UI** - Componentes primitivos accesibles
- **Shadcn/ui** - Sistema de componentes
- **Lucide React** - Biblioteca de iconos
- **React Hook Form** - Gestión de formularios
- **Day.js** - Biblioteca de manipulación de fechas
- **Zod** - Validación de esquemas

## 🎯 Funcionalidades

- **Creación de salas** - Crear salas para organizar conversaciones
- **Grabación de audio** - Grabar audio en las salas para transcripción
- **Sistema de preguntas y respuestas** - Hacer preguntas sobre el contenido de audio
- **Agentes inteligentes** - Respuestas generadas por IA basadas en el contenido de audio
- **Interfaz moderna** - Diseño responsive y accesible

## 📂 Patrones de Proyecto

- **Component-based Architecture** - Arquitectura basada en componentes React
- **File-based Routing** - Enrutamiento basado en archivos con React Router
- **Server State Management** - Gestión de estado del servidor con React Query
- **Variant-based Components** - Componentes con variantes usando CVA
- **Composition Pattern** - Patrón de composición con Radix Slot
- **Path Aliasing** - Alias de rutas (`@/` apunta a `src/`)

## ⚙️ Configuración del Proyecto

### Prerrequisitos

- Node.js (versión 18 o superior)
- npm o yarn

### Instalación

1. Clona el repositorio
2. Instala las dependencias:
   ```bash
   npm install
   ```

3. Ejecuta el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Accede a la aplicación en `http://localhost:5173`

### Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo
- `npm run build` - Genera build de producción
- `npm run preview` - Vista previa del build de producción

### Backend

El proyecto consume una API que debe estar ejecutándose en el puerto 3333. Asegúrate de que el backend esté configurado y ejecutándose antes de iniciar el frontend.

### Variables de Entorno (Opcional)

Para configurar la URL del API, puedes crear un archivo `.env` basado en `env.example`:

```bash
cp env.example .env
```

## 🛠️ Estructura del Proyecto

```
src/
├── components/       # Componentes reutilizables
│   ├── ui/          # Componentes de interfaz base
│   ├── create-room-form.tsx
│   ├── question-form.tsx
│   ├── question-item.tsx
│   ├── question-list.tsx
│   └── room-list.tsx
├── pages/           # Páginas de la aplicación
│   ├── create-room.tsx
│   ├── record-room-audio.tsx
│   └── room.tsx
├── http/            # Cliente HTTP y tipos
│   ├── types/       # Tipos TypeScript para API
│   └── use-*.ts     # Hooks de React Query
├── lib/             # Utilidades y configuraciones
└── app.tsx          # Componente raiz
```

## 📱 Páginas Principales

- **Crear Sala** - Formulario para crear nuevas salas de conversación
- **Grabar Audio** - Interfaz para grabar y subir audio a una sala
- **Sala** - Vista de una sala específica con preguntas y respuestas

## 🔗 Integración con IA

El proyecto integra con servicios de IA para:
- Transcripción de audio a texto
- Generación de embeddings para búsqueda semántica
- Respuestas inteligentes basadas en el contenido de audio 