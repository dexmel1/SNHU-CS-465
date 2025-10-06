const express = require("express");
const router = express.Router();

//import the controllers to be routed
const tripsController = require("../controllers/trips");

//define route for trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList) //GET method routes tripsFindByCode -requires paramete
    .post(tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(tripsController.tripsUpdateTrip);
module.exports = router;