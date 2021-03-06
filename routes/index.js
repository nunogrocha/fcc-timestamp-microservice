var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FreeCodeCamp Challenge: API Timestamp microservice' });
});

router.get('/:date', function(req, res) {
  var urlParam = req.params.date;
  var isDate = false;
  
  try {
	if ((new Date(urlParam)).getTime() > 0) {
	  isDate = true;
	} else if (!isDate && (Math.round(urlParam) == urlParam)) {
	  urlParam = parseInt(urlParam) * 1000;
	  isDate = true;
    }
  }
  catch(err) {
	console.log(err);
  }
  
  if (isDate) {
	  res.send({ "unix": new Date(urlParam).getTime() / 1000, "natural": new Date(urlParam).toDateString(), "error": false });
  } else {
	  res.send({ "unix": null, "natural": null, "error": true });
  }
  
});

module.exports = router;
