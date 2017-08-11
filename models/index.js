const Sequelize = require('sequelize');
const db = new Sequelize('postgres://localhost:5432/tripplanner');

const Place = db.define('place', {
  address: { type: Sequelize.TEXT }, //"75 Wall St"
  city: { type: Sequelize.STRING },  //"New York"
  state: { type: Sequelize.STRING }, //"NY"
  phone: { type: Sequelize.STRING }, //"123-456-7890"
  location: { type: Sequelize.ARRAY(Sequelize.DECIMAL) } //[40.705137, -74.013940]
})

const Hotel = db.define('hotel', {
  name: { type: Sequelize.STRING },        //"Bouley"
  num_stars: { type: Sequelize.DECIMAL },  //3.5
  amenities: { type: Sequelize.STRING }    //"Paid Wi-Fi, Dogs Allowed"
})

const Activity = db.define('activity', {
  name: { type: Sequelize.STRING },      //"Bouley"
  age_range: { type: Sequelize.STRING }  //"All"
})

const Restaurant = db.define('restaurant', {
  name: { type: Sequelize.STRING },      //"Bouley"
  cuisine: { type: Sequelize.STRING },   //"Shanghainese, Dim Sum"
  price: { type: Sequelize.INTEGER }     //3
})

Hotel.belongsTo(Place);
Activity.belongsTo(Place);
Restaurant.belongsTo(Place);

module.exports = {
  db,
  Place,
  Hotel,
  Activity,
  Restaurant
};




