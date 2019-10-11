require('dotenv').config();

const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  env: {
    API_URL: 
      !isProd ? 'http://localhost:3000/api' : 
      'https://env-pollution.nparfen.now.sh/api',
    MONGODB_URI: process.env.MONGODB_URI
  }
};