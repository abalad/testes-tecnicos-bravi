// people-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;
  const people = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    age: { type: String },
    contacts: {
      phone: { type: String },
      email: { type: String },
      whatsapp: { type: String },
    },
  }, {
    timestamps: true
  });

  return mongooseClient.model('people', people);
};
