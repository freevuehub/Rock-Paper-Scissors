const express = require('express')
const path = require('path')
const route = require('./route')
const bodyParser = require("body-parser")
const cookieParser = require('cookie-parser')

const app = express()

const http = require('http').createServer(app)
const io = require('socket.io')(http)

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'pages'))

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'html')))
app.use('/', route)

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('chat message', (message) => {
    io.emit('chat message', message)
  })
  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

http.listen(3544, () => {
  console.log('Start Server')
})