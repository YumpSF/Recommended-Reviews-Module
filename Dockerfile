FROM node:11
RUN mkdir -p src/app
WORKDIR /src/app
COPY package*.json /src/app/
RUN npm install
RUN npm -g install nodemon
COPY . /src/app/
EXPOSE 3000
CMD ["npm", "start"]

