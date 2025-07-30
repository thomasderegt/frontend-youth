#!/usr/bin/env node

// Migration Safety Checker
// This script validates that atomic design migration doesn't break functionality

const fs = require('fs');
const path = require('path');

console.log('🔍 Checking migration safety...');

// Check critical files exist
const criticalFiles = [
  'src/components/WheelOfIslam.js',
  'src/components/NamesOfAllah.js',
  'src/components/NameDetail.js',
  'src/components/TazkiyyahLanding.js',
  'src/components/OneTrueGodIntro.js',
  'src/components/OnboardingModal.js',
  'src/components/Settings.js',
  'src/components/ProgressBar.js',
  'src/App.js'
];

let allFilesExist = true;
criticalFiles.forEach(file => {
  if (!fs.existsSync(file)) {
    console.log(`❌ Missing critical file: ${file}`);
    allFilesExist = false;
  }
});

if (!allFilesExist) {
  console.log('\n🚨 CRITICAL: Missing files detected!');
  console.log('💡 Run: ./scripts/rollback.sh to restore');
  process.exit(1);
}

// Check if atomic components are properly structured
const atomicDirs = ['src/atoms', 'src/molecules', 'src/organisms', 'src/templates', 'src/pages'];
let atomicStructureValid = true;

atomicDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    if (files.length === 0) {
      console.log(`⚠️  Warning: Empty atomic directory: ${dir}`);
    }
  }
});

// Check App.js imports
const appJsContent = fs.readFileSync('src/App.js', 'utf8');
const hasAtomicImports = appJsContent.includes('from \'./atoms') || 
                        appJsContent.includes('from \'./molecules') || 
                        appJsContent.includes('from \'./organisms');

if (hasAtomicImports) {
  console.log('⚠️  Warning: App.js has atomic design imports');
  console.log('💡 This might cause issues if atomic components are incomplete');
}

// Check for compilation errors
console.log('\n🔍 Checking for potential compilation issues...');

// Check if atomic components have proper exports
atomicDirs.forEach(dir => {
  if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
      if (file.endsWith('.js')) {
        const filePath = path.join(dir, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        if (!content.includes('export default') && !content.includes('export {')) {
          console.log(`⚠️  Warning: ${filePath} might not export properly`);
        }
      }
    });
  }
});

console.log('\n✅ Migration safety check completed!');
console.log('💡 If you encounter issues, run: ./scripts/rollback.sh'); 