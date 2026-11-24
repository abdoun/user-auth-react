FROM node:18-alpine

WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm ci

# Build the React application
COPY . .
RUN npm run build

# Expose port 3004
EXPOSE 3004

# Start the app from production build
CMD ["npm", "start"]
