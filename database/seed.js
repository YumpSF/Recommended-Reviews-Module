var faker = require('faker');
var db = require('./index.js');

//generate restaurant table data (100)
var dataRestaurant = [];
for (let i = 0; i < 100; i++) {
  var obj = {};
  obj.name = faker.company.companyName();
  dataRestaurant.push(obj);
  const query = `Insert INTO restaurant(name) VALUES(?)`;
  db.query(query, [obj.name], (err) => {
    if (err) {
      console.log(err);
    }
  });
}

//generate user review table data (100)
var dataUserReview = [];
for (let i = 0; i < 100; i++) {
  var obj = {};
  obj.user_id = Math.floor(Math.random() * 100);
  obj.date = faker.date.past();
  obj.review_comment = faker.lorem.paragraph();
  obj.score = Math.floor(Math.random() * 10) / 2 + 0.5;
  obj.picture_food = faker.image.food();
  obj.restaurant_id = Math.floor(Math.random() * 100);
  dataUserReview.push(obj);
  const query = `Insert INTO users_reviews(user_id, date, review_comment, score, picture_food, restaurant_id) VALUES(?, ?, ?, ?, ?, ?)`;
  db.query(query, [obj.user_id, obj.date, obj.review_comment, obj.score, obj.picture_food, obj.restaurant_id], (err) => {
    if (err) {
      console.log(err);
    }
  });
}

//generate user info table data (100)
var dataUserInfo = [];
for (let i = 0; i < 100; i++) {
  var obj = {};
  obj.name = faker.name.findName();
  obj.location = faker.address.city() + ' ' + faker.address.state();
  obj.number_reviews = Math.floor(Math.random() * 50);
  obj.number_photos = Math.floor(Math.random() * 40);
  dataUserInfo.push(obj);
  const query = `Insert INTO user_info(name, location, number_reviews, number_photos) VALUES(?, ?, ?, ?)`;
  db.query(query, [obj.name, obj.location, obj.number_reviews, obj.number_photos], (err) => {
    if (err) {
      console.log(err);
    }
  });
}


