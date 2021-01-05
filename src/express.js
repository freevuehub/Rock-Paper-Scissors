const express = require('express')
const path = require('path')
const route = require('./route')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const app = express()
const http = require('http').createServer(app)

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'pages'))

app.use(cookieParser())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'html')))
app.use('/', route)
app.use(express.static(path.join(__dirname, '/assets')))

module.exports = http
