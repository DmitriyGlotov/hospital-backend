const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const app = express();
const apiRoutes = require('./src/modules/routes/routes');

app.use(cors());
app.use(express.json());
app.use('/', apiRoutes);
app.use('/', cookieParser())

const url = "mongodb+srv://User:asdfgh123@cluster0.3zx5p.mongodb.net/Data-base?retryWrites=true&w=majority";
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true});

app.listen(8000, () => {
  console.log('Example!!!');
});