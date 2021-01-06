const app = require('./express')
const io = require('socket.io')(app, {
  cors: {
    origin: 'http://localhost:3000',
  }
})

module.exports = io
