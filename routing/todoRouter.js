var TodoController = require('../controller/TodoController');

function router(server) {
  server.get('/todo', TodoController.getAll);
  server.get('/todo/:id', TodoController.get);
  server.post('/todo', TodoController.create);
  server.del('/todo/:id', TodoController.delete);
  server.put('/todo/:id', TodoController.update);
}

module.exports = router;