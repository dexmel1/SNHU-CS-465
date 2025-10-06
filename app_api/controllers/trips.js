const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

//GET: /trips -lists all the trips
// response must include HTML status code and JSON messages to the requesting client
const tripsList = async(requestAnimationFrame, res) => {
    const q = await Model
    .find({}) //no filter, return all records
    .exec();

    //uncomment next line to show results on the console
    //console.log(q);

    if(!q)
    {//database retuned no data
        return res
                .status(404)
                .json(err);
    } else { //return trip list
        return res
                .status(200)
                .json(q);
    }
}

//Get: /trips/tripCode -lists single trip
const tripsFindByCode = async(req, res) => {
    const q = await Model
        .find({'code' : req.params.tripCode}) //return single record
        .exec();

        //uncomment next line to show results on the console
        //console.log(q);
    
    if(!q)
    {
        return res
                .status(404)
                .json(err);
    } else {
        return res
                .status(200)
                .json(q);
    }
};

//POST: add a trip
const tripsAddTrip = async (req, res) => {
    const newTrip = new Trip({
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    });

    const q = await newTrip.save();

        if(!q)
        {
            return res
                .status(400)
                .json(err);
        } else {
            return res
                .status(201)
                .json(q);
        }
    
}

// PUT: /trips/:tripCode - Adds a new Trip
const tripsUpdateTrip = async (req, res) => {
    
    const q = await Model.findOneAndUpdate(
    { 'code' : req.params.tripCode },
    {
        code: req.body.code,
        name: req.body.name,
        length: req.body.length,
        start: req.body.start,
        resort: req.body.resort,
        perPerson: req.body.perPerson,
        image: req.body.image,
        description: req.body.description
    }).exec();
        if(!q)
        { // Database returned no data
        return res
            .status(400)
            .json(err);
        } else { // Return resulting updated trip
            return res
                .status(201)
                .json(q);
        }
}

module.exports = {
    tripsList,
    tripsFindByCode,
    tripsAddTrip,
    tripsUpdateTrip

};
