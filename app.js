/* Main Application File */

const express = require('express')
const http = require('http')
const mongoose = require('mongoose')


const expressConfig = require('./config/express')
const routeConfig = require('./routes')
const config = require('./config/environment')

// Connect to MongoDB
mongoose.connect(config.mongo.uri,
  { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false },)
mongoose.connection.on('error', (err) => {
  console.error('Error', 'MongoDB connection error', {
    data: err,
    time: new Date().toISOString()
  })
  process.exit(-1)
})

// Setup Server
const app = express()
const server = http.createServer(app)

expressConfig(app)
routeConfig(app)

// const config = {
//   port: 8080,
//   ip: '127.0.0.1'
// }

//Start Server

function startServer() {
  app.shoppingCarBk = server.listen(config.port, config.ip, () => {
    console.log(`Express server listening on ${config.port}, in ${app.get('env')} mode`)
  })
}

setImmediate(startServer) // Inicializa la funcion startServer con prioridad
// startServer()

module.exports = app
