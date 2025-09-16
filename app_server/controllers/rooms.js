const fs = require('fs');
const path = require('path');

// Load rooms data from JSON
const roomsPath = path.join(__dirname, '../../data/rooms.json');
const rooms = JSON.parse(fs.readFileSync(roomsPath, 'utf8'));

// Controller function
const roomsList = (req, res) => {
  const pgTitle = 'Travlr Getaways - Rooms';
  res.render('rooms', { title: pgTitle, rooms });
};

module.exports = { roomsList };