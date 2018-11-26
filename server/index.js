require('newrelic');
const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const morgan = require('morgan');
const db = require('../database/index.js');


function shouldCompress(req, res) {
  if (req.headers['x-no-compression']) return false;
  return compression.filter(req, res);
}
app.use(morgan('dev'));
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
    }
  });
});

app.listen(3001, () => console.log('listening on port', 3001));
