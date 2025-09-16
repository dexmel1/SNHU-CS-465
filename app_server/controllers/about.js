var fs = require('fs')

//GET About View
const about = (req, res) => {
    pgTitle = 'Travlr Getaways - About';
    res.render('about', { title: pgTitle });

};

module.exports = {
    about
}