#!/bin/bash

# Rollback Script for Atomic Design Migration
# This script restores the project to its working state

echo "🔄 Starting rollback process..."

# Check if we're in a broken state
if [ ! -f "src/components/WheelOfIslam.js" ]; then
    echo "❌ Critical components missing! Rolling back to backup..."
    git checkout backup-before-atomic-migration -- src/
    echo "✅ Rollback completed - restored original components"
    exit 0
fi

# Check if atomic components exist and are causing issues
if [ -d "src/atoms" ] || [ -d "src/molecules" ] || [ -d "src/organisms" ]; then
    echo "🧹 Cleaning up atomic design components..."
    
    # Remove atomic design directories
    rm -rf src/atoms/
    rm -rf src/molecules/
    rm -rf src/organisms/
    rm -rf src/templates/
    rm -rf src/pages/
    
    echo "✅ Removed atomic design components"
fi

# Check if App.js was modified and needs restoration
if grep -q "import.*from.*atoms\|import.*from.*molecules\|import.*from.*organisms" src/App.js; then
    echo "🔧 Restoring original App.js imports..."
    git checkout HEAD -- src/App.js
    echo "✅ Restored original App.js"
fi

# Check if package.json was modified
if grep -q "atomic\|design" package.json; then
    echo "🔧 Restoring original package.json..."
    git checkout HEAD -- package.json
    echo "✅ Restored original package.json"
fi

echo "✅ Rollback completed successfully!"
echo "🚀 You can now run 'npm start' to verify everything works" 