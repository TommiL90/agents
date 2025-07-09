
# Use an official Node.js runtime as a parent image
FROM node:22-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# The server runs TypeScript directly using --experimental-strip-types,
# so no build step is needed.

# Make port 3333 available to the world outside this container
EXPOSE 3333

# Define environment variables
ENV PORT=3333

# Run the app when the container launches
CMD ["node", "--experimental-strip-types", "src/server.ts"]
