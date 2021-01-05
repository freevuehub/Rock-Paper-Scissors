const app = require('./express')
const io = require('socket.io')(app)

module.exports = io
