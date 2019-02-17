const todoController = require('./todoController')

module.exports = (app) => {
  app.get('/todos', todoController.getAll)

  app.post('/todos', todoController.createTodo)

  app.delete('/todos', todoController.deleteTodo)
}