const faker = require('faker');
// const db = require('./index.js');
const path = require('path');
const fs = require('fs');
const moment = require('moment');
// generate restaurant table data (100)
const dataRestaurant = [];
for (let i = 0; i < 100; i++) {
  var restaurant = {};
  restaurant.restaurant_id = i + 1;
  restaurant.name = faker.company.companyName();
  dataRestaurant.push(restaurant);
  // const queryString = 'Insert INTO restaurant(name) VALUES(?)';
  // db.connection.query(queryString, [obj.name], (err) => {
  //   if (err) {
  //     console.log(err);
  //   }
  // });
}

// generate user info table data (100)
const dataUserInfo = [];
for (let i = 0; i < 100; i++) {
  var user = {};
  user.user_id = i + 1;
  user.user_name = faker.name.findName();
  user.user_avatar = faker.image.avatar();
  user.location = `${faker.address.city()} ${faker.address.state()}`;
  user.number_reviews = Math.floor(Math.random() * 50) + 1;
  user.number_photos = Math.floor(Math.random() * 40) + 1;
  dataUserInfo.push(user);
  // const queryString = 'Insert INTO user_info(user_name, user_avatar,location, number_reviews, number_photos) VALUES(?, ?, ?, ?, ?)';
  // db.connection.query(queryString, [obj.user_name, obj.user_avatar, obj.location, obj.number_reviews, obj.number_photos], (err) => {
  //   if (err) {
  //     console.log(err);
  //   }
  // });
}

// generate user review table data (1000)
const dataUserReview = [];
for (let i = 0; i < 1000; i++) {
  var reviews = {};
  var urlPath = 'https://s3-us-west-1.amazonaws.com/hrfrontendcapstone/';
  var stars = 'https://s3-us-west-1.amazonaws.com/hrfrontendcapstone/regular_';
  reviews.id = i + 1;
  reviews.user_id = Math.floor(Math.random() * 100) + 1;
  reviews.restaurant_id = Math.floor(Math.random() * 100) + 1;
  reviews.date = faker.date.past();
  reviews.date = moment(reviews.date).format('YYYY-MM-DD');
  reviews.review_comment = faker.lorem.paragraph();
  reviews.score = stars + Math.floor(Math.random() *9 + 1) + '.png';
  reviews.picture_food = urlPath + Math.floor(Math.random() * 9 + 1) + '.jpeg';
  dataUserReview.push(reviews);
  // const queryString = 'Insert INTO users_reviews(user_id, date, review_comment, score, picture_food, restaurant_id) VALUES(?, ?, ?, ?, ?, ?)';
  // db.connection.query(queryString, [obj.user_id, obj.date, obj.review_comment, obj.score, obj.picture_food, obj.restaurant_id], (err) => {
  //   if (err) {
  //     console.log(err);
  //   }
  // });
}

const csvConverter = (arr) => {
  let output = '';
  let column = [];
  for (let key in arr[0]) {
    column.push(key);
  }
  output += `${column.join()}\n`;
  for (let i = 0; i < arr.length; i++) {
    column = [];
    for (let key in arr[i]) {
      column.push(arr[i][key]);
    }
    output += `${column.join()}\n`;
  }
  return output;
};

const restaurantCSV = csvConverter(dataRestaurant);
const userInfoCSV = csvConverter(dataUserInfo);
const userReviewCSV = csvConverter(dataUserReview);

fs.writeFile(path.join(__dirname, 'restaurant.csv'), restaurantCSV, (err) => {
  if (err) throw err;
  console.log('saved');
});

fs.writeFile(path.join(__dirname, 'user_info.csv'), userInfoCSV, (err) => {
  if (err) throw err;
  console.log('saved');
});

fs.writeFile(path.join(__dirname, 'users_reviews.csv'), userReviewCSV, (err) => {
  if (err) throw err;
  console.log('saved');
});