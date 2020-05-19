const all = {
  env: process.env.NODE_ENV,
  port: process.env.PORT || 8080,
  ip: process.env.IP || '127.0.0.1',
  seedDB: false, // show populate the DB with sample data

  // Secret for session, you will want to change this and make it an environment variable
  secrets: {
    session: 'w0rksh0p-full5tack-j4v45cr1pt',
  },

  // MongoDB connection
  mongo: {
    uri: process.env.MONGODB_URI || 'mongodb+srv://node_shopping_dbUser:heN4meOJIwAqs9I0@cluster0-dunsz.mongodb.net/test?retryWrites=true&w=majority',
    db: 'node_shopping_db'
  }
}

module.exports = all
