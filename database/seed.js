const faker = require('faker');
const fs = require('fs');
const moment = require('moment');

const randomInt = max => Math.floor(Math.random() * max + 1);

const writeReviewCSV = () => {
  // const start = Date.now();
  const stream = fs.createWriteStream('./database/review.csv');
  let i = 0;
  function write() {
    while (i < 10000) {
      let fakeDate = faker.date.past();
      fakeDate = JSON.stringify(fakeDate).slice(1, 11);
      const review = {};

      review.restaurant_id = randomInt(1000);
      review.user_name = faker.name.findName();
      review.user_avatar = faker.image.avatar();
      review.location = `${faker.address.city()} ${faker.address.state()}`;
      review.date = moment(fakeDate).format('YYYY-MM-DD');
      review.comment = faker.lorem.paragraph();
      review.score = randomInt(10);
      review.food_image = `https://s3-us-west-1.amazonaws.com/yump-sf-images/${randomInt(499)}.jpg`;

      i += 1;
      if (!stream.write(`${i},${review.restaurant_id},"${review.user_name}","${review.user_avatar}","${review.location}","${review.date}","${review.comment}",${review.score},"${review.food_image}"\r\n`)) {
        return;
      }
      if (i % 100) {
        console.log(`${(i / 10000 * 100).toFixed(2)} %`);
        console.clear();
      }
    }
    stream.end();
    // const end = Date.now();
    // const elapsed = end - start;
    // const minutes = Math.floor(elapsed / 60000);
    // const seconds = ((elapsed % 60000) / 1000).toFixed(0);
    // console.log(seconds < 60 ? seconds : minutes);
  }
  stream.on('drain', () => {
    write();
  });

  stream.write('id,restaurant_id,user_name,user_avatar,location,date,comment,score,food_image\r\n');
  write();
};

// const writeUserCSV = () => {
//   const start = Date.now();
//   const stream = fs.createWriteStream('./database/user.csv');
//   let i = 0;
//   function write() {
//     // change back to 50 million after testing
//     while (i < 1000) {
//       const user_name = faker.name.findName();
//       const user_avatar = faker.image.avatar();
//       const location = `${faker.address.city()} ${faker.address.state()}`;
//       const number_reviews = Math.floor(Math.random() * 50) + 1;
//       const number_photos = Math.floor(Math.random() * 40) + 1;

//       i += 1;
//       if (!stream.write(`${i},"${user_name} ${i}","${user_avatar}","${location}",${number_reviews},${number_photos}\r\n`)) {
//         return;
//       }
//       if (i % 100) {
//         console.log(`${(i / 1000 * 100).toFixed(2)} %`);
//         console.clear();
//       }
//     }
//     stream.end(writeReviewCSV());
//     const end = Date.now();
//     const elapsed = end - start;
//     const minutes = Math.floor(elapsed / 60000);
//     const seconds = ((elapsed % 60000) / 1000).toFixed(0);
//     console.log(seconds < 60 ? seconds : minutes);
//   }
//   stream.on('drain', () => {
//     write();
//   });

//   stream.write('id,user_name,user_avatar,location,number_reviews,number_photos\r\n');
//   write();
// };

const writeRestaurantCSV = () => {
  // const start = Date.now();
  const stream = fs.createWriteStream('./database/restaurant.csv');
  let i = 0;
  function write() {
    // change back to 50 million after testing
    while (i < 1000) {
      const name = faker.company.companyName();
      i += 1;
      if (!stream.write(`${i},"${name} ${i}",\r\n`)) {
        return;
      }
      if (i % 100) {
        console.log(`${(i / 1000 * 100).toFixed(2)} %`);
        console.clear();
      }
    }
    stream.end(writeReviewCSV());
    // const end = Date.now();
    // const elapsed = end - start;
    // const minutes = Math.floor(elapsed / 60000);
    // const seconds = ((elapsed % 60000) / 1000).toFixed(0);
    // console.log(seconds < 60 ? seconds : minutes);
  }
  stream.on('drain', () => {
    write();
  });

  stream.write('id,name\r\n');
  write();
};
writeRestaurantCSV();
