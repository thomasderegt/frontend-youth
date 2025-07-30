# Component Backup Manifest

Created: Mon Jul 28 09:16:41 CEST 2025

## Components Backed Up:
- NameDetail.js
- NamesOfAllah.js
- OnboardingModal.js
- OneTrueGodIntro.js
- ProgressBar.js
- Settings.js
- TazkiyyahLanding.js
- WheelOfIslam.js

## Context Files Backed Up:
- LanguageContext.js
- StrategyContext.js
- ThemeContext.js

## App Files Backed Up:
- App.js

## Restore Commands:

```bash
# Restore all components
cp backups/components/*.js src/components/

# Restore context files
cp backups/context/*.js src/context/

# Restore App.js
cp backups/App.js src/

# Verify restoration
ls src/components/
ls src/context/
```
