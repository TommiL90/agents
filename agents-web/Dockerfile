
# Stage 1: Build the React application
FROM node:22-slim AS build

WORKDIR /usr/src/app

# Set the API URL to be a relative path for the reverse proxy
ENV VITE_API_URL=/api

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Serve the static files with Nginx
FROM nginx:stable-alpine

# Copy the built static files
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 4321

CMD ["nginx", "-g", "daemon off;"]
