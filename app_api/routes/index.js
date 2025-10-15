const express = require("express");
const router = express.Router();

//import the controllers to be routed
const tripsController = require("../controllers/trips");
const authController = require("../controllers/authentication");
const { authenticateJWT } = require('../controllers/authentication');

router.route("/register").post(authController.register);
router.route("/login").post(authController.login);

//define route for trips endpoint
router
    .route("/trips")
    .get(tripsController.tripsList) //GET method routes tripsFindByCode -requires paramete
    .post(authenticateJWT, tripsController.tripsAddTrip);

router
    .route('/trips/:tripCode')
    .get(tripsController.tripsFindByCode)
    .put(authenticateJWT, tripsController.tripsUpdateTrip)
    .delete(authenticateJWT, tripsController.tripsDeleteTrip);
module.exports = router;