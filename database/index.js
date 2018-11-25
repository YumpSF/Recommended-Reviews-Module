const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/whats_lunch');

const repoSchema = mongoose.Schema({
  restaurant_id: Number,
  reviews: [{
    user_name: String,
    user_avatar: String,
    location: String,
    date: String,
    score: Number,
    food_image: String,
  }],
});

const Repo = mongoose.model('restaurant_review', repoSchema);

// retrieve
const retrieve = (restaurant_id, callback) => {
  Repo.find({ restaurant_id }, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports.retrieve = retrieve;
