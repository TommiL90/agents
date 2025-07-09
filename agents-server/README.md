
> **Nota Importante**
> La forma recomendada de levantar este proyecto es a través de la configuración de Docker centralizada en la raíz del repositorio. Por favor, consulta el [README.md principal](../../README.md) para ver las instrucciones completas.
> Las instrucciones a continuación son para referencia o para desarrollo manual del servicio de forma aislada.

# NLW Agents

Proyecto desarrollado para crear una API robusta y eficiente.

## 🚀 Tecnologías

- **Node.js** con TypeScript nativo (experimental strip types)
- **Fastify** - Framework web rápido y eficiente
- **PostgreSQL** con extensión **pgvector** para vectores
- **Drizzle ORM** - Operaciones de base de datos type-safe
- **Zod** - Validación de esquemas
- **Docker** - Containerización de la base de datos
- **Biome** - Linting y formateo de código
- **Google Gemini AI** - Servicios de IA para transcripción y embeddings

## 🏗️ Arquitectura

El proyecto sigue una arquitectura modular con:

- **Separación de responsabilidades** entre rutas, esquemas y conexión con base de datos
- **Validación de esquemas** con Zod para type safety
- **ORM type-safe** con Drizzle para operaciones de base de datos
- **Validación de variables de entorno** centralizadas
- **Integración con IA** para transcripción de audio y generación de embeddings

## ⚙️ Configuración y Setup

### Prerrequisitos

- Node.js (versión con soporte a `--experimental-strip-types`)
- Docker y Docker Compose

### 1. Clona el repositorio
```bash
git clone <url-del-repositorio>
cd server
```

### 2. Configura la base de datos
```bash
docker-compose up -d
```

### 3. Configura las variables de entorno

Copia el archivo de ejemplo y configúralo:

```bash
cp env.example .env
```

Luego edita el archivo `.env` con tus valores:

```env
PORT=3333
DATABASE_URL=postgresql://docker:docker@localhost:5432/agents
GEMINI_API_KEY=tu_api_key_de_google_gemini_aqui
```

### 4. Instala las dependencias
```bash
npm install
```

### 5. Ejecuta las migraciones de la base de datos
```bash
npx drizzle-kit migrate
```

### 6. (Opcional) Popula la base de datos con datos de ejemplo
```bash
npm run db:seed
```

### 7. Ejecuta el proyecto

**Desarrollo:**
```bash
npm run dev
```

**Producción:**
```bash
npm start
```

## 📚 Scripts Disponibles

- `npm run dev` - Ejecuta el servidor en modo de desarrollo con hot reload
- `npm start` - Ejecuta el servidor en modo de producción
- `npm run db:generate` - Genera nuevas migraciones de base de datos
- `npm run db:migrate` - Ejecuta las migraciones de base de datos
- `npm run db:seed` - Popula la base de datos con datos de ejemplo

## 🌐 Endpoints

La API estará disponible en `http://localhost:3333`

### Gestión de Salas
- `GET /rooms` - Lista todas las salas disponibles
- `POST /rooms` - Crea una nueva sala
  - Body: `{ "name": "string", "description": "string" }`

### Gestión de Audio
- `POST /rooms/:roomId/audio` - Sube y transcribe audio a una sala
  - Params: `roomId` (string)
  - Body: Archivo de audio (multipart/form-data)

### Sistema de Preguntas y Respuestas
- `GET /rooms/:roomId/questions` - Obtiene todas las preguntas de una sala
  - Params: `roomId` (string)
- `POST /rooms/:roomId/questions` - Crea una nueva pregunta en una sala
  - Params: `roomId` (string)
  - Body: `{ "question": "string" }`

## 🤖 Servicios de IA

### Transcripción de Audio
- Utiliza Google Gemini AI para convertir audio a texto
- Soporta múltiples formatos de audio
- Procesamiento asíncrono para archivos grandes

### Generación de Embeddings
- Convierte texto en vectores numéricos usando pgvector
- Permite búsqueda semántica en el contenido de audio
- Optimizado para similitud de contenido

### Respuestas Inteligentes
- Genera respuestas basadas en el contenido transcrito
- Utiliza embeddings para encontrar contexto relevante
- Respuestas contextuales y precisas

## 🗄️ Estructura de la Base de Datos

### Tablas Principales
- **rooms** - Salas de conversación
- **audio_chunks** - Fragmentos de audio transcritos con embeddings
- **questions** - Preguntas y respuestas generadas

### Características
- **Vectores pgvector** para búsqueda semántica
- **Timestamps** automáticos para auditoría
- **Relaciones** optimizadas para consultas eficientes

## 🔧 Estructura del Proyecto

```
src/
├── db/              # Configuración de base de datos
│   ├── connection.ts
│   ├── migrations/  # Migraciones de Drizzle
│   ├── schema/      # Esquemas de tablas
│   └── seed.ts      # Datos de ejemplo
├── http/            # Configuración HTTP
│   └── routes/      # Endpoints de la API
├── services/        # Servicios externos
│   └── gemini.ts    # Integración con Google Gemini AI
├── env.ts           # Validación de variables de entorno
└── server.ts        # Punto de entrada de la aplicación
```

 