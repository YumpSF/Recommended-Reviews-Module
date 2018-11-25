create table restaurant (
  id serial primary key,
  name TEXT not null
);

create table reviews (
  id serial primary key,
  restaurant_id INTEGER references restaurant (id),
  user_name TEXT not null,
  user_avatar TEXT not null,
  location TEXT not null,
  date DATE not null,
  comment TEXT not null,
  score SMALLINT not null,
  food_image TEXT not null
);

COPY restaurant(name)
FROM '/Users/brianhuston/Desktop/sdc/nomnoms-reviews/database/restaurant.csv' DELIMITER ',' CSV HEADER;

COPY reviews(restaurant_id,user_name,user_avatar,location,date,comment,score,food_image) 
FROM '/Users/brianhuston/Desktop/sdc/nomnoms-reviews/database/review.csv' DELIMITER ',' CSV HEADER;
