const mongoose = require('mongoose');

const { Schema } = mongoose;

const shedule = new Schema({
  name: String,
  doctor: String,
  data: String,
  lament: String,
});

module.exports = Shedule = mongoose.model('schedule', shedule);