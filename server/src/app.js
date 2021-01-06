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
  socket.on('join room', (roomId, name) => {
    socket.join(roomId, () => {
      io.to(roomId).emit('join room', roomId, name)
      io.to(roomId).emit('chat message', name, '', 'join')
    })
  })
  socket.on('chat message', (roomId, name, message, type='message') => {
    console.log(roomId, name, message, type)
    io.to(roomId).emit('chat message', name, message, type)
  })
})

app.listen(3544, () => {
  console.log('Start Server')
})
