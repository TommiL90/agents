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

## 🚀 Levantamiento con Docker (Recomendado)

Este método levanta toda la aplicación (frontend, backend y base de datos) en contenedores Docker. Es la forma más sencilla de empezar.

### Prerrequisitos

- **Docker** y **Docker Compose**
- **Git**

### 1. Clona el repositorio

```bash
git clone <url-del-repositorio>
cd agents
```

### 2. Configura tu API Key

Crea un archivo `.env` a partir del ejemplo:

```bash
cp .env.example .env
```

Luego, edita el archivo `.env` y añade tu `GEMINI_API_KEY` de Google.

### 3. Levanta la aplicación

```bash
docker-compose up --build
```

La primera vez, la construcción puede tardar unos minutos. Una vez finalizado, el frontend estará disponible en `http://localhost:5173`.

Para detener la aplicación, presiona `Ctrl + C` en la terminal donde se está ejecutando `docker-compose` y luego ejecuta:

```bash
docker-compose down
```

## 🔧 Variable de Entorno

La única variable de entorno que necesitas configurar se encuentra en el archivo `.env` en la raíz del proyecto:

```env
# Clave de API para los servicios de IA de Google
GEMINI_API_KEY=tu_api_key_de_google_gemini_aqui
```

El resto de variables necesarias para la comunicación entre servicios ya están pre-configuradas en el archivo `docker-compose.yml` para funcionar dentro del entorno de Docker.

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

 