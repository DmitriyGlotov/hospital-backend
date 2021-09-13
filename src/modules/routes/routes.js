const express = require('express');
const router = express.Router();

const {
  registration,
  authorization
} = require('../controllers/user-controller');

const {
  allShedule,
  createShedule,
  changeShedule,
  deleteShedule
} = require('../controllers/schedule-controller')

router.post('/createUser', registration);
router.post('/login', authorization);
router.get('/allShedule', allShedule);
router.post('/createShedule', createShedule);
router.patch('/changeShedule', changeShedule);
router.delete('/deleteShedule', deleteShedule);

module.exports = router;