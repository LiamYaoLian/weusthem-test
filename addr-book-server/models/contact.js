var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  id: Schema.Types.ObjectId,
  firstName: {type: String},
  lastName: {type: String},
  email: {type: String},
  phoneNumber: {type: String},
});

// Export model.
module.exports = mongoose.model('Contact', ContactSchema);
