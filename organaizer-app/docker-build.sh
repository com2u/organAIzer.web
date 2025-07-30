#!/bin/bash

# Docker build script for OrganAIzer App
# File: /organaizer-app/docker-build.sh
# Purpose: Build and deploy the OrganAIzer React application in Docker

set -e

echo "🚀 Building OrganAIzer App Docker Container..."

# Stop existing container if running
echo "📦 Stopping existing container..."
docker-compose down 2>/dev/null || true

# Build the Docker image
echo "🔨 Building Docker image..."
docker-compose build --no-cache

# Start the container
echo "🚀 Starting container on port 7703..."
docker-compose up -d

# Wait for container to be ready
echo "⏳ Waiting for container to be ready..."
sleep 5

# Check if container is running
if docker-compose ps | grep -q "Up"; then
    echo "✅ OrganAIzer App is running successfully!"
    echo "🌐 Access the application at: http://localhost:7703"
    echo "📊 Container status:"
    docker-compose ps
else
    echo "❌ Failed to start the container"
    echo "📋 Container logs:"
    docker-compose logs
    exit 1
fi
