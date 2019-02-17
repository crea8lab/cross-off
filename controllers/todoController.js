const Todo = require('../models/todo')

module.exports = {
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
      res.json(data)
    } catch (error) {
      res.status(404) 
      res.send(error)
      res.json({ success: false })
    }
  },

  deleteTodo: async (req, res) => {
    let data = await Todo.findOneAndRemove({
      item: req.params.item.replace(/\-/g, ' ')
    })
    res.redirect('/todos')
  }
}