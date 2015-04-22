var mongoose = require('mongoose');
var BaseSchema = require('../utils/BaseSchema');

var todoSchema = new BaseSchema({
  title:  String,
  createdAt: { type: Date, default: Date.now },
  completedAt: { type: Date, default: null }
});

todoSchema.path('title').required(true);

todoSchema.virtual('isComplete').get(function () {
  return (this.completedAt !== null);
});

var Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;