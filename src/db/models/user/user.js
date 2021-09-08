const mongoose = require('mongoose');

const { Schema } = mongoose;

const user = new Schema({
  login: String,
  password: String,
});

module.exports = User = mongoose.model('user', user);