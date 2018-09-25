const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database');

app.use((req, res, next) => {
  console.log(`${req.method} request receieved at ${req.url}.`);
  next();
});
app.use(express.static(path.join(__dirname, '/public')));

app.post('./checkout/product_id', bodyParser.json(), (req, res) => {
  // client will make an AJAX POST request with a body containing the id number
  db.retrieveInformationById(req.body, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
