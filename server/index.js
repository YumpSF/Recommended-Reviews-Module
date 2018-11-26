<<<<<<< HEAD
require('newrelic');
=======
>>>>>>> 120b116db8885360688788a2bf49c32e16bfa8c1
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
<<<<<<< HEAD
const morgan = require('morgan');
=======
>>>>>>> 120b116db8885360688788a2bf49c32e16bfa8c1
const db = require('../database/index.js');


function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) return false;
  return compression.filter(req, res);
}
<<<<<<< HEAD
app.use(morgan('dev'));
=======

>>>>>>> 120b116db8885360688788a2bf49c32e16bfa8c1
app.use(express.static('build'));
app.use(compression({
  level: 2,
  filter: shouldCompress, // set predicate to determine whether to compress
}));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// send to dist folder where client is being render when a GET request is sent to '/'
app.use(express.static(path.join(__dirname, '../public/dist')));

<<<<<<< HEAD
app.get('/api/:id/', (req, res) => {
  db.retrieve(req.params.id, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(data);
    }
  });
});

app.post('/api/:name', (req, res) => {
  const reviewer = req.body.restaurant;
  db.addRestaurant(reviewer, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log(results);
      res.sendStatus(201);
=======
// send to index.html of particular restaurant_id and shows all reviews for that restaurant_id
app.get('/:restaurant_id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dist/index.html'));
});

app.get('/api/:restaurant_id/', (req, res) => {
  const restaurantId = req.params.id;
  db.restaurantReviews(restaurantId, (err, results) => {
    if (err) {
      res.status(500).send();
    } else {
      res.send(results);
    }
  });
});

app.get('/api/restaurant/:restaurant_id/', (req, res) => {
  const restaurantId = req.params.id;
  db.getOne(restaurantId, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(results);
    }
  });
});

app.post('/api/:name', (req, res) => {
  const reviewer = req.params.name;
  db.addRestaurant(reviewer, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(201);
    }
  });
});

app.patch('/api/:restaurant_id/', (req, res) => {
  const restaurantId = req.params.id;
  const newName = req.body.newName;
  db.editRestaurant(restaurantId, newName, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(202);
    }
  });
});

app.delete('/api/:id/', (req, res) => {
  const restaurantId = req.params.id;
  db.deleteRestaurant(restaurantId, (err) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.sendStatus(200);
>>>>>>> 120b116db8885360688788a2bf49c32e16bfa8c1
    }
  });
});

<<<<<<< HEAD
app.listen(3001, () => console.log('listening on port', 3001));
=======
app.listen(3000, () => console.log('listening on port', 3000));
>>>>>>> 120b116db8885360688788a2bf49c32e16bfa8c1
