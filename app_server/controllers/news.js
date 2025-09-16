var fs = require('fs')

//GET About View
const news = (req, res) => {
    pgTitle = 'Travlr Getaways - News';
    res.render('news', { title: pgTitle });

};

module.exports = {
    news
}
