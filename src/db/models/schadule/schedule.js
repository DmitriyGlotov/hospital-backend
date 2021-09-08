const mongoose = require('mongoose');

const { Schema } = mongoose;

const schedule = new Schema({
  Name: String,
  Doctor: String,
  Data: String,
  lament: String,
});

module.exports = Schedule = mongoose.model('schedule', schedule);