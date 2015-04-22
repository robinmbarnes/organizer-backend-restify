var Todo = require('../model/Todo');


TodoController = {
  getAll: function (req, res, next) {
    Todo
      .find()
      .sort('-createdAt')
      .exec(function (err, results) {
        results = results.map(function (todo) {
          return todo.toJSON();
        });

        res.send(results);
      });
  },

  get: function (req, res, next) {
    Todo.findOne({ _id: req.params.id }, function (err, todo) {
      if(err || (todo === null)) {
        res.status(404);
        return res.end();
      }

      return res.send(200, todo.toJSON());
    });
  },

  create: function (req, res, next) {
    var todo = new Todo(req.params);
    todo.save(function (err) {
      if(err) {
        response.status(500);
        response.end();
      }
      res.send(200, todo.toJSON());
    });
  },

  update: function (req, res, next) {
    var submittedTodo = req.params;

    Todo.findOne({ _id: todo.id }, function (err, todo) {
      if(err || (todo === null)) {
        res.status(404);
        return res.end();
      }

      if(submittedTodo.isComplete === true && todo.completedAt === null) {
        todo.completedAt = new Date();
      }
      todo.title = todo.title;
      todo.save(function (err, todo) {
        if(err) {
          res.status(500);
          return res.send();
        }

        res.send(200, todo.toJSON());
      });


    });
  },

  delete: function (req, res, next) {
    Todo.remove({ _id: req.params.id }, function (err) {
      var status = (err ? 500 : 200);
      res.status(status);
      res.end();
    });
  }
};

module.exports = TodoController;
