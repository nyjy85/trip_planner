var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/trip');
var db.mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

// creating new schema
var placeSchema = new mongoose.Schema({
	address: {type: String, required: true} 
	city: String,
	state: String,
	phone: String,
	location: [Number, Number]
});

var hotelSchema = new mongoose.Schema({
	name: String,
	place: String,
	num_stars: {type: Number, min:1, max: 5},
	amenities: [String]
});
