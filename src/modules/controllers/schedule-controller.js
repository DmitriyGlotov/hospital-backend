const Shedule = require('../../db/models/schadule/schedule');

module.exports.allShedule = (res) => {
  Shedule.find().then(result => {
    res.send({ data: result });
  });
}

module.exports.createShedule = (req, res) => {
  const shedule = new Shedule(req.body);
  shedule.save().then(result => {
    Shedule.find().then(result => {
      res.send({ data: result });
    });
  });
};

module.exports.changeShedule = (req, res) => {
  Shedule.updateOne({_id: req.body._id}).then(result => {
    Shedule.find().then(result => {
      res.send({ data: result });
    });
  });
};

module.exports.deleteShedule = (req, res) => {
Shedule.deleteOne({_id: req.query._id}).then(result => {
  Shedule.find().then(result => {
      res.send({ data: result });
    });
  });
};