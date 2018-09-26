require('dotenv').config();
const express = require('express');
const cors = require('cors')

const app = express();

const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database');

app.use((req, res, next) => {
  console.log(`${req.method} request received at ${req.url}.`);
  next();
});

app.use(bodyParser.json());
app.use(cors( { origin: 'http://localhost:3000'} ));
app.use(express.static('./client/dist'));

app.get('/checkout/:id', (req, res) => {
  // const productId = req.originalUrl.split('/')[2];
  db.retrieveInformationById(req.params.id, (err, data) => {
    if (err) {
      console.log('GET ERROR ', err);
      res.send(err);
    } else {
      console.log('GET SUCCESSFUL ', data);
      res.json(data[0]);
    }
  });
});

app.post('/checkout', (req, res) => {
  db.insertRecord(req.body, (err, data) => {
    if (err) {
      console.log('POST ERROR ', err);
      res.status(500).send('POST ERROR');
    } else {
      console.log('POST SUCCESSFUL ', data);
      res.status(201).send('POST SUCCESSFUL');
    }
  });
});

app.put('/checkout/:id', (req, res) => {
  db.updateRecord(req.params.id, req.body, (err, data) => {
    if (err) {
      console.log('PUT ERROR ', err);
      res.status(500).send('PUT ERROR');
    } else {
      console.log('PUT SUCCESSFUL ', data);
      res.status(200).send('PUT SUCCESSFUL');
    }
  });
});

app.delete('/checkout/:id', (req, res) => {
  db.deleteRecord(req.params.id, (err, data) => {
    console.log('****ID****', req.params.id)
    if (err) {
      console.log('DELETE ERROR ', err);
      res.status(500).send('DELETE ERROR');
    } else {
      console.log('DELETE SUCCESSFUL ', data);
      res.status(200).send('DELETE SUCCESSFUL');
    }
  });
});

const PORT = process.env.PORT || 7777;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
