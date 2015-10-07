var express = require('express');
var router = express.Router();
var models = require('../models');
var Place = models.Place;
var Hotel = models.Hotel;
var Activity = models.Activity;
var Restaurant = models.Restaurant;


router.get('/', function(req,res){
	var collections = [Hotel.find().exec(), Activity.find().exec(), Restaurant.find().exec()];
	Promise.all(collections)
	.then(function(array){
		// var data = {};
		// data.Hotel = array[0];
		// data.Activity = array[1];
		// data.Restaurant = array[2];
		// console.log(data.Hotel)
		//html/swig only knows about the keys on the object you're passing to res.render
		res.render('index', {Hotel: array[0], Activity: array[1], Restaurant: array[2]});
	})
	.catch(function(err){
		console.log(err);
	}) 
})

module.exports = router;