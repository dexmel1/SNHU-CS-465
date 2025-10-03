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

module.exports = {
    tripsList,
    tripsFindByCode
};
