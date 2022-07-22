var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ContactSchema = new Schema({
  id: Schema.Types.ObjectId,
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  email: {type: String, required: true},
  phoneNumber: {type: String, required: true},
});

// Export model.
module.exports = mongoose.model('Contact', ContactSchema);
