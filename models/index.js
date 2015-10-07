var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://localhost/tripPlanner');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));



var Schema = mongoose.Schema;

var placeSchema = new Schema({
	address: String,
	city: String,
	state: String,
	phone: String,
	location: [Number]
})

var ranks = [1,2,3,4,5]
var hotelSchema = new Schema({
	name: String,
	place: [placeSchema],
	num_stars: {type:Number, enum: ranks},
	amenities: String
})

var activitySchema = new Schema({
	name: String,
	place: [placeSchema],
	age_range: String
})

var restaurantSchema = new Schema({
	name: String,
	place: [placeSchema],
	cuisines: String,
	price: {type:Number, enum: ranks}
})




var Place = mongoose.model('Place', placeSchema);
var Hotel = mongoose.model('Hotel', hotelSchema);
var Activity = mongoose.model('Activity', activitySchema);
var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = {
	Place: Place,
	Hotel: Hotel,
	Activity: Activity,
	Restaurant: Restaurant
}






































