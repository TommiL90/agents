# Agents - Proyecto Fullstack

Sistema de agentes inteligentes. Permite crear salas de conversación, grabar audio, transcribirlo y hacer preguntas inteligentes basadas en el contenido.

## 🎯 Propósito

Este proyecto demuestra la integración de tecnologías modernas para crear un sistema de agentes inteligentes que:

- **Transcribe audio** en tiempo real usando Google Gemini AI
- **Genera embeddings** para búsqueda semántica del contenido
- **Responde preguntas** de forma inteligente basándose en el contexto del audio
- **Organiza conversaciones** en salas para mejor gestión del contenido

## 🏗️ Arquitectura

### Frontend (agents-web)
- **React 19** con TypeScript
- **Vite** para desarrollo y build
- **TailwindCSS** para estilos
- **React Query** para gestión de estado del servidor
- **React Router** para navegación
- **Shadcn/ui** para componentes

### Backend (agents-server)
- **Node.js** con TypeScript nativo
- **Fastify** como framework web
- **PostgreSQL** con extensión pgvector para vectores
- **Drizzle ORM** para operaciones de base de datos
- **Google Gemini AI** para transcripción y embeddings
- **Docker** para containerización

## 🚀 Levantamiento Local

### Prerrequisitos

- **Node.js** (versión 18 o superior)
- **Docker** y Docker Compose
- **Git**

### 1. Clona el repositorio

```bash
git clone <url-del-repositorio>
cd agents
```

### 2. Configura el Backend

```bash
# Entra al directorio del servidor
cd agents-server

# Instala dependencias
npm install

# Levanta la base de datos PostgreSQL
docker-compose up -d

# Copia el archivo de variables de entorno
cp env.example .env

# Edita el archivo .env con tus credenciales
# Especialmente GEMINI_API_KEY de Google

# Ejecuta las migraciones
npx drizzle-kit migrate

# (Opcional) Popula con datos de ejemplo
npm run db:seed

# Inicia el servidor en modo desarrollo
npm run dev
```

El backend estará disponible en `http://localhost:3333`

### 3. Configura el Frontend

```bash
# En otra terminal, entra al directorio del frontend
cd agents-web

# Instala dependencias
npm install

# Inicia el servidor de desarrollo
npm run dev
```

El frontend estará disponible en `http://localhost:5173`

## 📁 Estructura del Proyecto

```
agents/
├── agents-server/          # Backend API
│   ├── src/
│   │   ├── db/            # Configuración de base de datos
│   │   ├── http/routes/   # Endpoints de la API
│   │   ├── services/      # Servicios de IA
│   │   └── server.ts      # Punto de entrada
│   ├── docker/            # Configuración de Docker
│   └── env.example        # Variables de entorno
├── agents-web/            # Frontend React
│   ├── src/
│   │   ├── components/    # Componentes reutilizables
│   │   ├── pages/         # Páginas de la aplicación
│   │   ├── http/          # Cliente HTTP y tipos
│   │   └── lib/           # Utilidades
│   └── env.example        # Variables de entorno
└── README.md              # Este archivo
```

## 🔧 Variables de Entorno

### Backend (.env)
```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
GEMINI_API_KEY=tu_api_key_de_google_gemini_aqui
```

### Frontend (.env) - Opcional
```env
VITE_API_URL=http://localhost:3333
```

## 🌐 Endpoints Principales

### Gestión de Salas
- `GET /rooms` - Lista todas las salas
- `POST /rooms` - Crea una nueva sala

### Gestión de Audio
- `POST /rooms/:roomId/audio` - Sube y transcribe audio

### Sistema de Preguntas
- `GET /rooms/:roomId/questions` - Obtiene preguntas de una sala
- `POST /rooms/:roomId/questions` - Crea una nueva pregunta

## 🤖 Funcionalidades de IA

### Transcripción de Audio
- Convierte audio a texto usando Google Gemini AI
- Soporta múltiples formatos de audio
- Procesamiento asíncrono

### Búsqueda Semántica
- Genera embeddings del contenido transcrito
- Permite búsqueda por similitud semántica
- Optimizado con pgvector

### Respuestas Inteligentes
- Genera respuestas contextuales
- Basadas en el contenido del audio
- Utiliza embeddings para encontrar contexto relevante

## 📱 Páginas del Frontend

- **Crear Sala** - Formulario para crear nuevas salas
- **Grabar Audio** - Interfaz para grabar y subir audio
- **Sala de Preguntas** - Vista con preguntas y respuestas

## 🛠️ Scripts Útiles

### Backend
```bash
npm run dev          # Desarrollo con hot reload
npm start            # Producción
npm run db:generate  # Genera migraciones
npm run db:migrate   # Ejecuta migraciones
npm run db:seed      # Datos de ejemplo
```

### Frontend
```bash
npm run dev          # Desarrollo
npm run build        # Build de producción
npm run preview      # Vista previa del build
```

## 🔍 Tecnologías Clave

- **Google Gemini AI** - Transcripción y embeddings
- **PostgreSQL + pgvector** - Base de datos vectorial
- **React Query** - Gestión de estado del servidor
- **Drizzle ORM** - Operaciones type-safe de BD
- **Fastify** - Framework web rápido
- **TailwindCSS** - Framework CSS utility-first

## 🚀 Despliegue

### Backend
1. Configura variables de entorno de producción
2. Ejecuta migraciones: `npm run db:migrate`
3. Inicia con: `npm start`

### Frontend
1. Configura `VITE_API_URL` para producción
2. Build: `npm run build`
3. Sirve los archivos estáticos

## 📚 Recursos Adicionales

- [Documentación de Google Gemini AI](https://ai.google.dev/)
- [Documentación de pgvector](https://github.com/pgvector/pgvector)
- [Documentación de Drizzle ORM](https://orm.drizzle.team/)
- [Documentación de Fastify](https://www.fastify.io/)

---

Desarrollado con ❤️ durante el NLW de Rocketseat 