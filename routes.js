/* Main Application Routes */

// Import Endpoints
const helloWorld = require('./api/helloworld')

module.exports = (app) => {
  // Routes here
  app.use('/api/helloworld', helloWorld)

  // Next routes
  // Endpoints in plural
  // app.use('/api/users', user);
  // app.use('/api/products', product);
}


