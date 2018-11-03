const faker = require('faker');
const db = require('./index.js');

// generate restaurant table data (100)
const dataRestaurant = [];
for (let i = 0; i < 100; i++) {
  var obj = {};
  obj.name = faker.company.companyName();
  dataRestaurant.push(obj);
  const queryString = 'Insert INTO restaurant(name) VALUES(?)';
  db.connection.query(queryString, [obj.name], (err) => {
    if (err) {
      console.log(err);
    }
  });
}

// generate user info table data (100)
const dataUserInfo = [];
for (let i = 0; i < 100; i++) {
  var obj = {};
  obj.user_name = faker.name.findName();
  obj.user_avatar = faker.image.avatar();
  obj.location = `${faker.address.city()} ${faker.address.state()}`;
  obj.number_reviews = Math.floor(Math.random() * 50) + 1;
  obj.number_photos = Math.floor(Math.random() * 40) + 1;
  dataUserInfo.push(obj);
  const queryString = 'Insert INTO user_info(user_name, user_avatar,location, number_reviews, number_photos) VALUES(?, ?, ?, ?, ?)';
  db.connection.query(queryString, [obj.user_name, obj.user_avatar, obj.location, obj.number_reviews, obj.number_photos], (err) => {
    if (err) {
      console.log(err);
    }
  });
}

// generate user review table data (1000)
const dataUserReview = [];
for (let i = 0; i < 1000; i++) {
  var obj = {};
  var urlPath = 'https://s3-us-west-1.amazonaws.com/hrfrontendcapstone/';
  var stars = 'https://s3-us-west-1.amazonaws.com/hrfrontendcapstone/regular_';
  obj.user_id = Math.floor(Math.random() * 100) + 1;
  obj.date = faker.date.past();
  obj.review_comment = faker.lorem.paragraph();
  obj.score = stars + Math.floor(Math.random() *9 + 1) + '.png';
  obj.picture_food = urlPath + Math.floor(Math.random() * 9 + 1) + '.jpeg';
  obj.restaurant_id = Math.floor(Math.random() * 100) + 1;
  dataUserReview.push(obj);
  const queryString = 'Insert INTO users_reviews(user_id, date, review_comment, score, picture_food, restaurant_id) VALUES(?, ?, ?, ?, ?, ?)';
  db.connection.query(queryString, [obj.user_id, obj.date, obj.review_comment, obj.score, obj.picture_food, obj.restaurant_id], (err) => {
    if (err) {
      console.log(err);
    }
  });
}
