const Todo = require('../models/todo')

module.exports = {
  home: (req, res) => {
    res.redirect('/todos')
  },

  getAll: async (req, res) => {
    try {
      let todo = await Todo.find({}).sort({ date: -1 })
      res.status(200)
      res.render('todo', { todos: todo })
    } catch {
      res.status(500)
      res.json({
        success: false
      })
    }
  },

  createTodo: async (req, res) => {
    let { item } = req.body

    try {
      let data = await Todo({
        name: item
      }).save()
      return res.json(data)
    } catch (error) {
      res.status(409) 
      return res.json({ success: false })
    }
  },

  deleteTodo: (req, res) => {
    let item = req.params.item.replace(/\-/g, ' ')
    Todo.findOneAndRemove({ name: item })
      .then((data) => {
        return res.json(data)
      })
      .catch(err => {
        res.json(err)
      })
  }
}