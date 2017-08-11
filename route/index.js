const express = require('express');
const {db, Hotel, Place,Activity,Restaurant } = require('../models');
const nunjucks = require('nunjucks');
var router = express.Router();

module.exports = router;
///trip

router.get('/', function (req, res, next) {

    var outerScopeContainer = {};
    Hotel.findAll()
        .then(function (dbHotels) {
            outerScopeContainer.dbHotels = dbHotels;
            return Restaurant.findAll();
        })
        .then(function (dbRestaurants) {
            outerScopeContainer.dbRestaurants = dbRestaurants;
            return Activity.findAll();
        })
        .then(function (dbActivities) {
            res.render('index', {
                hotels: outerScopeContainer.dbHotels,
                restaurants: outerScopeContainer.dbRestaurants,
                activities: dbActivities

            });
        })
        .catch(next);



    //
    // Hotel.findAll()
    //     .then(function (dbHotels) {
    //         res.render('index',{hotels:dbHotels});
    //     });
    //
    //
});

