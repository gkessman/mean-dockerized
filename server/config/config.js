// Check environment
var env = process.env.NODE_ENV || 'development';

// Fetch environment config
var config = require('./config.json');
var envConfig = config[env];

// Add environment config calues to process.env
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);