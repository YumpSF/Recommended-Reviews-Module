create database yump_SF

use yump_SF

create table restaurant
(
  id   int auto_increment
    primary key,
  name text null
);

create table user_info
(
  id             int auto_increment
    primary key,
  name           text null,
  location       text null,
  number_reviews int  null,
  number_photos  int  null
);

create table users_reviews
(
  id             int auto_increment
    primary key,
  user_id        int  not null,
  date           date not null,
  review_comment text not null,
  score          int  not null,
  picture_food   text not null,
  restaurant_id  int  not null,
  constraint users_reviews_restaurant_id_fk
  foreign key (restaurant_id) references yump_sf.restaurant (id),
  constraint users_reviews_user_info_id_fk
  foreign key (user_id) references yump_sf.user_info (id)
);