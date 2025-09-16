const fs = require('fs');
const path = require('path');

// Load rooms data from JSON
const mealsPath = path.join(__dirname, '../../data/meals.json');
const meals = JSON.parse(fs.readFileSync(mealsPath, 'utf8'));

// Controller function
const mealsList = (req, res) => {
  const pgTitle = 'Travlr Getaways - Meals';
  res.render('meals', { title: pgTitle, meals });
};

module.exports = { mealsList };