const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/whats_lunch');

const restaurantSchema = mongoose.Schema({
  id: Number,
  restaurant_name: String,
  reviews: [{
    user_name: String,
    user_avatar: String,
    location: String,
    date: String,
    score: Number,
    food_image: String,
  }],
});

const Restaurant = mongoose.model('restaurant_reviews', restaurantSchema);

// retrieve
const retrieve = (id, callback) => {
  Restaurant.find({ id }, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const addRestaurant = (restaurant_name, callback) => {
  Restaurant.create({ restaurant_name }, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports.retrieve = retrieve;
module.exports.addRestaurant = addRestaurant;
