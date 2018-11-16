CREATE DATABASE yump_SF;

use yump_SF;

create table restaurant (
  id INT auto_increment primary key,
  name TEXT not null
);

create table reviews (
  id INT auto_increment primary key,
  restaurant_id INT  not null,
  user_name TEXT not null,
  user_avatar TEXT not null,
  location TEXT not null,
  date DATE not null,
  comment TEXT not null,
  score TINYINT not null,
  food_image TEXT not null,
  foreign key (restaurant_id)
    references restaurant (id)
    ON DELETE CASCADE
);

LOAD DATA LOCAL INFILE './database/restaurant.csv' 
INTO TABLE restaurant 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;

LOAD DATA LOCAL INFILE './database/review.csv' 
INTO TABLE reviews 
FIELDS TERMINATED BY ',' 
ENCLOSED BY '"'
LINES TERMINATED BY '\n'
IGNORE 1 ROWS;
