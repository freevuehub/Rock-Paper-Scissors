const express = require('express')
const cookie = require('cookie')
const uuid = require('uuid').v4

const router = express.Router()
const cookieName = 'freevue_rps_name'
const cookieRoom = 'freevue_rps_room'
// const cookieRoomName = 'freevue_rps_room_name'

router.get('/login', (request, response) => {
  if (request.headers.cookie) {
    const cookies = cookie.parse(request.headers.cookie)

    if (cookies[cookieName]) {
      return response.redirect('/')
    }
  }

  response.render('login')
})
router.post('/login', (request, response) => {
  const options = {
    expiryDate : new Date(Date.now() + (60 * 60 * 1000 * 1)),
    httpOnly: true,
  }

  response.cookie(cookieName, request.body.name, options)
  response.redirect('/')
})
router.post('/room', (_, response) => {
  const id = uuid()

  response.json({
    status: 2000,
    result: {
      roomId: id,
    },
  })
})
router.get('/share/:id', (request, response) => {
  console.log(request.params.id)

  // response.cookie(cookieRoom, id, options)
  // response.cookie(cookieRoomName, request.body.name, options)
  // response.redirect('/')

  response.render('share', { roomId: request.params.id })
})
router.post('/share', (request, response) => {
  const options = {
    expiryDate : new Date(Date.now() + (60 * 60 * 1000 * 1)),
    httpOnly: true,
  }

  response.cookie(cookieRoom, request.body.roomId, options)
  response.cookie(cookieName, request.body.name, options)
  response.redirect('/')
})
router.get('/', (request, response) => {
  if (request.headers.cookie) {
    const cookies = cookie.parse(request.headers.cookie)

    if (!cookies[cookieName]) {
      return response.redirect('/login')
    }

    if (!cookies[cookieRoom]) {
      response.render('create')
    } else {
      response.render('main', {
        roomId: cookies[cookieRoom],
        name: cookies[cookieName],
      })
    }
  } else {
    response.render('create')
  }
})

module.exports = router
