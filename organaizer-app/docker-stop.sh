#!/bin/bash

# Docker stop script for OrganAIzer App
# File: /organaizer-app/docker-stop.sh
# Purpose: Stop and clean up the OrganAIzer Docker container

set -e

echo "🛑 Stopping OrganAIzer App Docker Container..."

# Stop and remove containers
echo "📦 Stopping containers..."
docker-compose down

# Optional: Remove images (uncomment if you want to clean up images)
# echo "🗑️ Removing Docker images..."
# docker-compose down --rmi all

# Show status
echo "📊 Current Docker status:"
docker ps -a | grep organaizer || echo "No OrganAIzer containers found"

echo "✅ OrganAIzer App has been stopped successfully!"
