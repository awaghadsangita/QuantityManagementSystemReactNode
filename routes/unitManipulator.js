var express = require('express');
var router = express.Router();
var unitManipulator=require('../backend/controller/unitManipulator');

router.get('/convert', unitManipulator.convert);
router.get('/compare', unitManipulator.compare);

module.exports = router;
