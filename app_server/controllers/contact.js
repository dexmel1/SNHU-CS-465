var fs = require('fs')

//GET About View
const contact = (req, res) => {
    pgTitle = 'Travlr Getaways - Contact';
    res.render('contact', { title: pgTitle });

};

module.exports = {
    contact
}
