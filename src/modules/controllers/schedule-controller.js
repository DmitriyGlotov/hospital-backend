const Shedule = require('../../db/models/shedule/shedule');
const jwt = require("jsonwebtoken");

module.exports.allShedule = (req, res) => {
  const {authorization} = req.headers;
  const decoded = jwt.verify(authorization, process.env.JWT_ACCESS_TOKEN);
  Shedule.find({UserId: decoded.id}).then(result => {
    res.send({ data: result });
  });
}

module.exports.createShedule = (req, res) => {
  const { headers, body } = req;
  const decoded = jwt.verify(headers.authorization, process.env.JWT_ACCESS_TOKEN);
  body.UserId = decoded.id;
  const shedule = new Shedule(body);
  shedule.save().then(result => {
    Shedule.find({UserId: decoded.id}).then(result => {
      res.send({ data: result });
    });
  });
};

module.exports.changeShedule = (req, res) => {
  const { authorization } = req.headers;
  const decoded = jwt.verify(authorization, process.env.JWT_ACCESS_TOKEN);
  Shedule.updateOne({_id: req.body._id}, req.body).then(result => {
    Shedule.find({UserId: decoded.id}).then(result => {
      res.send({ data: result });
    });
  });
};

module.exports.deleteShedule = (req, res) => {
const { authorization } = req.headers;
const decoded = jwt.verify(authorization, process.env.JWT_ACCESS_TOKEN);
Shedule.deleteOne({_id: req.query._id}).then(result => {
  Shedule.find({UserId: decoded._id}).then(result => {
      res.send({ data: result });
    });
  });
};