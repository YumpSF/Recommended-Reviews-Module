#!/bin/bash

echo $PWD

mysqlimport --ignore-lines=1 --fields-terminated-by=, --local -u root yump_SF ./restaurant.csv

mysqlimport --ignore-lines=1 --fields-terminated-by=, --local -u root yump_SF ./user_info.csv

mysqlimport --ignore-lines=1 --fields-terminated-by=, --local -u root yump_SF ./users_reviews.csv