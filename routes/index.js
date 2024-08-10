var express = require('express');
var router = express.Router();
var familycontroller = require("../controller/familycontroller");
/* GET home page. */
router.post('/addfamily/', familycontroller.AddFamily)
router.get('/getfamily/', familycontroller.getFamily)


module.exports = router;
