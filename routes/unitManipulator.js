var express = require('express');
var router = express.Router();
var unitManipulator=require('../backend/controller/unitManipulator');
/* GET users listing. */
router.get('/convert', unitManipulator.convert);


module.exports = router;
