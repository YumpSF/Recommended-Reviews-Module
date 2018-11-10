var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('../database/index.js');
var path = require ('path');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//send to dist folder where client is being render when a GET request is sent to '/'
app.use(express.static(path.join(__dirname, '../public/dist')));

//send to index.html of particular restaurant_id and shows all reviews for that restaurant_id
app.get('/:restaurant_id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'));
});

//shows an array of objects filled with data of that particular restaurant_id and all the reviews for that restaurant
app.get('/api/:restaurant_id/', (req, res) => {
  const restaurant_id = req.params.restaurant_id;
  db.restaurantReviews(restaurant_id, (err, results) => {
    if(err) {
      res.status(500).send();
    }
    res.send(results)
  })
});

app.listen(3000, () => {console.log('listening on port', 3000)});