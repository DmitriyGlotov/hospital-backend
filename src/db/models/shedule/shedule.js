const mongoose = require('mongoose');

const { Schema } = mongoose;

const shedule = new Schema({
  Name: String,
  Doctor: String,
  Data: String,
  Lament: String,
  UserId: String,
});

module.exports = Shedule = mongoose.model('schedule', shedule);