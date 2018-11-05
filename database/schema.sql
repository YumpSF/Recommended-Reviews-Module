DROP DATABASE IF EXISTS yump_SF;
create database yump_SF;

use yump_SF;

create table restaurant
(
  restaurant_id   int auto_increment not null
    primary key,
  name text not null
);

create table user_info
(
  user_id             int auto_increment not null
    primary key,
  user_name           text not null,
  user_avatar         text not null,
  location            text null,
  number_reviews int  not null,
  number_photos  int  not null
);

create table users_reviews
(
  id             int auto_increment not null
    primary key,
  user_id        int  not null,
  restaurant_id  int  not null,
  date           date not null,
  review_comment text not null,
  score          text  not null,
  picture_food   text not null,
  foreign key (restaurant_id) references yump_sf.restaurant (restaurant_id),
  foreign key (user_id) references yump_sf.user_info (user_id)
);