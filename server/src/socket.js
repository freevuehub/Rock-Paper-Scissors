const app = require('./express')
const io = require('socket.io')(app, {
  cors: {
    origin: process.env.FRONT_ORIGIN,
  }
})

module.exports = io
