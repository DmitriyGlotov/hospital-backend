const Shedule = require('../../db/models/schadule/shedule');

module.exports.allShedule = (req, res) => {
  Shedule.find().then(result => {
    res.send({ data: result });
  });
}

module.exports.createShedule = (req, res) => {
  const shedule = new Shedule(req.body);
  if (!shedule.name || !shedule.doctor || !shedule.data || !shedule.lament) {
    res.status(422).send('Error! Data not correct');
  } else {
    shedule.save().then(result => {
      Shedule.find().then(result => {
        res.send({ data: result });
      });
    });
  }
};

module.exports.changeShedule = (req, res) => {
    Shedule.updateOne({_id: req.body._id}, req.body).then(result => {
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