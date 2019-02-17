

module.exports = {
  getAll: (req, res) => {
    res.render('todo')
  },

  createTodo: (req, res) => {
    res.render('todos')
  },

  deleteTodo: (req, res) => {
    res.render('todos')
  }
}