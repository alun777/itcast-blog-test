const express = require('express')
const app = express()
const path = require('path')
const router = require('./router.js')
const bodyParser = require('body-parser')

app.use('/public/', express.static('./public/'))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(router)

app.listen(3000, function () {
  console.log('running...')
})