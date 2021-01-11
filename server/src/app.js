const dayjs = require('dayjs')
const app = require('./express')
const io = require('./socket')

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
  socket.on('leave room', (roomId) => {
    socket.leave(roomId, () => {
      io.to(roomId).emit('leave room', roomId)
    })
  })
  socket.on('join room', (roomId) => {
    socket.join(roomId, () => {
      io.to(roomId).emit('join room', roomId)
    })
  })
  socket.on('chat message', (roomId, message, name) => {
    io.to(roomId).emit('chat message', message, name, dayjs().format('YYYY-MM-DD HH:mm'))
  })
  socket.on('welcome message', (roomId, name) => {
    io.to(roomId).emit('welcome message', name)
  })
  socket.on('total message', (message) => {
    io.emit('total message', message)
  })
})

const port = process.env.PORT || 3544

app.listen(port, () => {
  console.log(`Start Server ${port}`)
})
