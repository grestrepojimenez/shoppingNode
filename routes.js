/* Main Application Routes */

// Import Endpoints
const helloWorld = require('./api/helloworld')
const product = require('./api/product')

module.exports = (app) => {
  // Routes here
  app.use('/api/helloworld', helloWorld)
  app.use('/api/product', product)

  // Next routes
  // Endpoints in plural
  // app.use('/api/users', user);
  // app.use('/api/products', product);
}
