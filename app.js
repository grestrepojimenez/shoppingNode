/* Main Application File */

const express = require('express')
const http = require('http')

// Express Config  --new line
const expressConfig = require('./config/express')

// Setup Server
const app = express()
const server = http.createServer(app)

// Express Config  --new line
expressConfig(app)

const config = {
  port: 8080,
  ip: '127.0.0.1'
}

//Start Server

function startServer() {
  app.shoppingCarBk = server.listen(config.port, config.ip, ()=> {
    console.log(`Express server listening on ${config.port}, in ${app.get('env')} mode`)
  })
}

setImmediate(startServer) // Inicializa la funcion startServer con prioridad
// startServer()

module.exports = app
