const Todo = require('../models/todo')

module.exports = {
  getAll: async (req, res) => {
    try {
      let todo = Todo.find({}).sort({ date: -1 })
      res.status(200)
      res.render('todo', { todos: todo })
    } catch {
      res.status(500)
      res.json({
        success: false
      })
    }
  },

  createTodo: (req, res) => {
    res.render('todos')
  },

  deleteTodo: (req, res) => {
    res.render('todos')
  }
}