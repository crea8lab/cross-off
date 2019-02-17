const mongoose = require('mongoose')
const Schema = mongoose.Schema

const todoSchema = new Schema({
  name: { type: String, required: true, unique: true },
  date: { type: Date, default: Date.now }
})

module.exports = Todo = mongoose.model('Todo', todoSchema)