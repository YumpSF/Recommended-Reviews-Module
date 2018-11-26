<<<<<<< HEAD
create table restaurant (
  id serial primary key,
=======
CREATE DATABASE yump_SF;

use yump_SF;

create table restaurant (
  id INT auto_increment primary key,
>>>>>>> 120b116db8885360688788a2bf49c32e16bfa8c1
  name TEXT not null
);

create table reviews (
<<<<<<< HEAD
  id serial primary key,
  restaurant_id INTEGER references restaurant (id),
=======
  id INT auto_increment primary key,
  restaurant_id INT  not null,
>>>>>>> 120b116db8885360688788a2bf49c32e16bfa8c1
  user_name TEXT not null,
  user_avatar TEXT not null,
  location TEXT not null,
  date DATE not null,
  comment TEXT not null,
<<<<<<< HEAD
  score SMALLINT not null,
  food_image TEXT not null
);

COPY restaurant(name)
FROM '/Users/brianhuston/Desktop/sdc/nomnoms-reviews/database/restaurant.csv' DELIMITER ',' CSV HEADER;

COPY reviews(restaurant_id,user_name,user_avatar,location,date,comment,score,food_image) 
FROM '/Users/brianhuston/Desktop/sdc/nomnoms-reviews/database/review.csv' DELIMITER ',' CSV HEADER;
=======
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
>>>>>>> 120b116db8885360688788a2bf49c32e16bfa8c1
