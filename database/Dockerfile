# Derived from official mysql image (our base image)
FROM mysql:5.7
# Add a database
ENV MYSQL_ROOT_PASSWORD=
ENV MYSQL_ALLOW_EMPTY_PASSWORD=yes

RUN mkdir ./seed
# Add the content of the sql-scdripts/ directory to your image
# All scripts in docker-entrypoint-initdb.d/ are automatically
# executed during container startup
COPY ./schema.sql/ /docker-entrypoint-initdb.d/

COPY ["restaurant.csv", "user_info.csv", "users_reviews.csv", "./seed/"]

COPY ./seed.sh/ /docker-entrypoint-initdb.d/

