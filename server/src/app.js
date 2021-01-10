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
  socket.on('join room', (roomId, name) => {
    socket.join(roomId, () => {
      io.to(roomId).emit('join room', roomId, name)
    })
  })
  socket.on('chat message', (roomId, name, message, type='message') => {
    io.to(roomId).emit('chat message', name, message, type, dayjs().format('YYYY-MM-DD HH:mm'))
  })
  socket.on('total message', (message) => {
    io.emit('total message', message)
  })
})

const port = process.env.PORT || 3544

app.listen(port, () => {
  console.log(`Start Server ${port}`)
})
