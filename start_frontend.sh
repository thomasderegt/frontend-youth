#!/bin/bash

# Start React Frontend
echo "Starting Wheel of Islam Frontend..."

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
fi

# Set environment variable for API URL
export REACT_APP_API_BASE_URL="http://localhost:8000"

# Start development server
echo "Starting React development server on http://localhost:3000"
npm start 