const todoController = require('./todoController')

module.exports = (app) => {
  app.get('/', todoController.home)

  app.get('/todos', todoController.getAll)

  app.post('/todos', todoController.createTodo)

  app.delete('/todos/:item', todoController.deleteTodo)
}