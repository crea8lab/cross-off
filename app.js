require('./config/config')

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const todoRoutesController = require('./controllers/todoRoutesController')

const app = express()
const port = process.env.PORT
const uri = process.env.MONGODB_URI

app.set('view engine', 'ejs')
app.use(express.static('./public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

mongoose.connect(uri, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useFindAndModify: false
})
  .then(() => console.log(`DB connected`))
  .catch((err) => console.log(`An error occurred ${err}`))

todoRoutesController(app)

app.listen(port, () => console.log(`Start adding todo at http://localhost:${port}`))