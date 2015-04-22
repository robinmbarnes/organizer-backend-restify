var mongoose = require('mongoose');

function BaseSchema() {
  mongoose.Schema.apply(this, Array.prototype.slice.call(arguments));
  this.virtual('id').get(function(){
    return this._id.toHexString();
  });

  this.set('toJSON', {
    virtuals: true
  });

  this.options.toJSON.transform = function (doc, ret, options) {
    delete ret._id;
    delete ret.__v;
  };
}

BaseSchema.prototype = Object.create(mongoose.Schema.prototype);
BaseSchema.prototype.constructor = BaseSchema;

module.exports = BaseSchema;