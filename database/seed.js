const faker = require('faker');
const fs = require('fs');
const moment = require('moment');

const randomInt = max => Math.floor(Math.random() * max + 1);

const writeReviewCSV = () => {
  const stream = fs.createWriteStream('./database/review2.csv');
  let i = 0;
  function write() {
    while (i < 80000000) {
      let fakeDate = faker.date.past();
      fakeDate = JSON.stringify(fakeDate).slice(1, 11);
      const review = {};

      review.restaurant_id = randomInt(10000000);
      review.user_name = faker.name.findName();
      review.user_avatar = faker.image.avatar();
      review.location = `${faker.address.city()} ${faker.address.state()}`;
      review.date = moment(fakeDate).format('YYYY-MM-DD');
      review.comment = faker.lorem.paragraph();
      review.score = randomInt(10);
      review.food_image = `https://s3-us-west-1.amazonaws.com/yump-sf-images/${randomInt(499)}.jpg`;

      i += 1;
      if (!stream.write(`${review.restaurant_id},"${review.user_name}","${review.user_avatar}","${review.location}","${review.date}","${review.comment}",${review.score},"${review.food_image}"\n`)) {
        return;
      }
      if (i % 100) {
        console.log(`${(i / 80000000 * 100).toFixed(2)} %`);
        console.clear();
      }
    }
    stream.end();
  }
  stream.on('drain', () => {
    write();
  });

  stream.write('restaurant_id,user_name,user_avatar,location,date,comment,score,food_image\n');
  write();
};

const writeRestaurantCSV = () => {
  const stream = fs.createWriteStream('./database/restaurant.csv');
  let i = 0;
  function write() {
    while (i < 10000000) {
      const name = faker.company.companyName();
      i += 1;
      if (!stream.write(`"${name} ${i}"\n`)) {
        return;
      }
      if (i % 100) {
        console.log(`${(i / 10000000 * 100).toFixed(2)} %`);
        console.clear();
      }
    }
    stream.end(writeReviewCSV());
  }
  stream.on('drain', () => {
    write();
  });

  stream.write('name\n');
  write();
};
// writeRestaurantCSV();
writeReviewCSV();
