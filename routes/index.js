var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('get index')
  res.send('GET index');
});

router.post('/', function(req, res, next) {
  console.log("POST index")
  console.log(req.body)
  res.send("POST index")
})

module.exports = router;
