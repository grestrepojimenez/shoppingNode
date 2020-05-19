config/express.js
/**
 * Middlewares Express configuration
 */
​
// const compression = require('compression'); // mejora rendimiento -- opcional
const bodyParser = require('body-parser'); // permite acceder al cuerpo de una peticion
const methodOverride = require('method-override'); // permite usar put y delete en html
const errorHandler = require('errorhandler'); // manejo de errores en desarrollo
​
module.exports = (app) => {
  const env = app.get('env');
​
  // app.use(compression());
  app.use(bodyParser.urlencoded({ extended: false, limit: '50mb' }));
  app.use(bodyParser.json({ limit: '50mb' }));
  app.use(methodOverride());
​
  if (env === 'development' || env === 'test') {
    app.use(errorHandler()); // Error handler - has to be last
  }
};
