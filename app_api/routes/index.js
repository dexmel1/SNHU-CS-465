const express = require("express");
const router = express.Router();

//import the controllers to be routed
const tripsController = require("../controllers/trips");

//define route for trips endpoint
router.route("/trips").get(tripsController.tripsList); // GET method routes tripList

router.route('/trips/:tripCode').get(tripsController.tripsFindByCode); //GET method routes tripsFindByCode -requires parameter

module.exports = router;