require('dotenv').config();
const User = require('../../db/models/user/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.registration = async (req, res, next) => {
  const user = new User(req.body);
  const checkUser = await User.findOne({login: user.login});

  if (checkUser) {
    res.status(400).send({message: 'Error! This login is already occupied'});
  } else {
    user.password = bcrypt.hashSync(user.password, 5);

    const payload = {id: user._id, login: user.login };
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, {expiresIn: '30m'});

    user.save().then(result => {
      res.send({accessToken});
    });
  }
}

module.exports.authorization = async (req, res) => {
  const { login, password } = req.body;
  const user = await User.findOne({login: login});

  if (!user) {
    res.status(401).send({message: 'Error! This username does not exist'});
  } else {
    const checkPass = await bcrypt.compare(password, user.password);

    if (checkPass) {
      const payload = {id: user._id, login: user.login } ;
      const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, {expiresIn: '30m'});
      res.send({accessToken});
    } else {
      res.status(402).send({message: 'Error! This password does not exist'});
    }
  }
}