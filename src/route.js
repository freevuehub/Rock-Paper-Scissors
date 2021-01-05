const express = require('express')
const cookie = require('cookie')

const router = express.Router()

router.get('/login', (request, response) => {
  if(request.headers.cookie !== undefined){
    const cookies = cookie.parse(request.headers.cookie)

    if (cookies['freevue_rps_name']) {
      return response.redirect('/')
    }
  }

  response.render('login')
})
router.post('/login', (request, response) => {
  if(request.headers.cookie !== undefined){
    const cookies = cookie.parse(request.headers.cookie)

    if (cookies['freevue_rps_name']) {
      return response.redirect('/')
    }

    const options = {
      expiryDate : new Date(Date.now() + (60 * 60 * 1000 * 1)),
      httpOnly: true,
    }

    response.cookie('freevue_rps_name', request.body.name, options)
    response.redirect('/')
  }
})
router.get('/', (request, response) => {

  console.log(new Date(Date.now() + (60 * 60 * 1000 * 1)))
  if(request.headers.cookie !== undefined){
    const cookies = cookie.parse(request.headers.cookie)

    if (!cookies['freevue_rps_name']) {
      return response.redirect('/login')
    }
  }

  response.render('main')
})

module.exports = router
