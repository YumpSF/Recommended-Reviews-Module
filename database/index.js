const mysql = require('mysql');

// connect to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'yump_SF',
});

connection.connect();

const restaurantReviews = function (id, callback) {
  const query = `
    select restaurant.name, user_info.user_avatar, user_info.user_name, user_info.location, user_info.number_reviews, user_info.number_photos, users_reviews.date, users_reviews.review_comment, users_reviews.score, users_reviews.picture_food, restaurant.name FROM users_reviews 
    INNER JOIN restaurant ON restaurant.restaurant_id = users_reviews.restaurant_id  
    INNER JOIN user_info ON user_info.user_id = users_reviews.user_id
    WHERE restaurant.restaurant_id = ${id}
    ORDER BY users_reviews.date desc
  `;
  connection.query(query, (error, results) => {
    if (error) {
      callback(error, null);
    } else {
      callback(null, results);
    }
  });
};


module.exports = { connection, restaurantReviews };
