#!/bin/bash

# Component Backup Script
# Creates individual backups of each component before migration

echo "📦 Creating component backups..."

# Create backup directory
mkdir -p backups/components
mkdir -p backups/context

# Backup all components
echo "📋 Backing up components..."
cp src/components/*.js backups/components/

# Backup context files
echo "📋 Backing up context files..."
cp src/context/*.js backups/context/

# Backup App.js
echo "📋 Backing up App.js..."
cp src/App.js backups/

# Create backup manifest
echo "📝 Creating backup manifest..."
cat > backups/BACKUP_MANIFEST.md << EOF
# Component Backup Manifest

Created: $(date)

## Components Backed Up:
$(ls backups/components/ | sed 's/^/- /')

## Context Files Backed Up:
$(ls backups/context/ | sed 's/^/- /')

## App Files Backed Up:
- App.js

## Restore Commands:

\`\`\`bash
# Restore all components
cp backups/components/*.js src/components/

# Restore context files
cp backups/context/*.js src/context/

# Restore App.js
cp backups/App.js src/

# Verify restoration
ls src/components/
ls src/context/
\`\`\`
EOF

echo "✅ Component backups created in backups/ directory"
echo "📁 Backup location: backups/"
echo "📋 Manifest: backups/BACKUP_MANIFEST.md" 