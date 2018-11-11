#!/bin/bash

echo $PWD

mysqlimport --ignore-lines=1 --fields-terminated-by=, --local -u root yump_SF ./seed/restaurant.csv

mysqlimport --ignore-lines=1 --fields-terminated-by=, --local -u root yump_SF ./seed/user_info.csv

mysqlimport --ignore-lines=1 --fields-terminated-by=, --local -u root yump_SF ./seed/users_reviews.csv