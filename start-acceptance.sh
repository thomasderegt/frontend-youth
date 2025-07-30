#!/bin/bash

# Start the acceptance environment on port 5000
echo "Starting Wheel of Islam - Acceptance Environment on port 5000..."

# Copy acceptance source to src
rm -rf src
cp -r src-acceptance src

# Start the app with acceptance package.json
npm run start --prefix . --package package-acceptance.json 