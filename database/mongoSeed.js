const faker = require('faker');
const fs = require('fs');
const moment = require('moment');

const randomInt = max => Math.floor(Math.random() * max + 1);

const stream = fs.createWriteStream('./database/mongoReview.json');

let i = 0;

function write() {
  while (i < 10000000) {
    i += 1;
    let fakeDate = faker.date.past();
    fakeDate = JSON.stringify(fakeDate).slice(1, 11);
    const name = faker.company.companyName();
    const reviewNum = randomInt(14);
    const restaurantReviews = {};
    restaurantReviews.id = i;
    restaurantReviews.restaurant_name = name;
    restaurantReviews.reviews = [];

    for (let j = 0; j < reviewNum; j += 1) {
      const newReview = {};
      // newReview.review_id = j;
      newReview.user_name = faker.name.findName();
      newReview.user_avatar = faker.image.avatar();
      newReview.location = `${faker.address.city()} ${faker.address.state()}`;
      newReview.date = moment(fakeDate).format('YYYY-MM-DD');
      newReview.score = randomInt(10);
      newReview.food_image = `https://s3-us-west-1.amazonaws.com/yump-sf-images/${randomInt(499)}.jpg`;
      restaurantReviews.reviews.push(newReview);
    }

    if (!stream.write(`${JSON.stringify(restaurantReviews)}\n`)) {
      return;
    }
    if (i % 1000) {
      console.log(`${(i / 10000000 * 100).toFixed(2)} %`);
      console.clear();
    }
  }
  stream.end();
}
stream.on('drain', () => {
  write();
});

write();
