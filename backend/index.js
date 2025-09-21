// Entry point for Passenger
// This file is automatically loaded when Passenger requires the backend directory

// Check if the app has been built
const fs = require('fs');
const path = require('path');

const mainPath = path.join(__dirname, 'dist/src/main.js');

if (!fs.existsSync(mainPath)) {
  console.error(
    'Error: Application not built. Please run "npm run build" first.',
  );
  console.error('Looking for:', mainPath);
  process.exit(1);
}

// Load and start the NestJS application
module.exports = require('./dist/src/main.js');
