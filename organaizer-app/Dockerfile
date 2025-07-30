# Multi-stage build for React application
# Stage 1: Build the application
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies (including devDependencies for build)
RUN npm ci

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Stage 2: Production image with NGINX
FROM nginx:alpine

# Copy built application from builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom NGINX configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 7703
EXPOSE 7703

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]
