var express = require('express');
var router = express.Router();
var models = require('../models');
var Promise = require('promise');
/* GET home page. */
router.get('/', function(req, res, next) {
	var promises = [
		models.Restaurant.find().exec(),
		models.Hotel.find().exec(),
		models.ThingToDo.find().exec()
	];

	Promise.all(promises)
	  .then(function(results) {
	  	res.render('index', {
	  		all_hotels: results[0],
	  		all_restaurants: results[1],
	  		all_things_to_do: results[2]
	  	});
	  });

});



module.exports = router;
