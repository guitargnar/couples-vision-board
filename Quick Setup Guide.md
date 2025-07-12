# Quick Setup Guide

## For Windows Users

1. **Install Node.js**
   - Download from https://nodejs.org
   - Choose the LTS version
   - Run the installer with default settings

2. **Run the Vision Board**
   - Open Command Prompt or PowerShell
   - Navigate to the `vision-board` folder
   - Type: `npm install` and press Enter (first time only)
   - Type: `npm run dev` and press Enter
   - Open your browser to http://localhost:5173

## For Mac Users

1. **Install Node.js**
   - Download from https://nodejs.org
   - Choose the LTS version
   - Run the installer

2. **Run the Vision Board**
   - Open Terminal
   - Navigate to the `vision-board` folder
   - Type: `npm install` and press Enter (first time only)
   - Type: `npm run dev` and press Enter
   - Open your browser to http://localhost:5173

## Alternative: Direct Browser Access

If you don't want to install Node.js:
1. Open the `dist` folder
2. Double-click on `index.html`
3. The vision board will open in your browser
4. Note: Some features may be limited in this mode

## Troubleshooting

- **"npm not found"**: Install Node.js first
- **Port already in use**: Try `npm run dev -- --port 3001`
- **Browser doesn't open**: Manually go to http://localhost:5173

## Stopping the Application

- Press `Ctrl+C` in the terminal/command prompt to stop the server
- Your data is automatically saved and will be there when you restart

