var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var db = require('../database/index.js');
var path = require ('path');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//send to dist folder where client is being render when a GET request is sent to '/'
app.use(express.static(path.join(__dirname, '../public/dist')));

//
app.get('/:restaurant_id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'));
});

app.get('/api/:restaurant_id/', (req, res) => {
  const restaurant_id = req.params.restaurant_id;
  console.log(restaurant_id)
  db.restaurantReviews(restaurant_id, (err, results) => {
    if(err) {
      res.status(500).send();
    }
    res.send(results)
  })
});

app.listen(3000, () => {console.log('listening on port', 3000)});