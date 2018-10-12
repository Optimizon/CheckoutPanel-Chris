require('dotenv').config();
// const { Client } = require('pg');
const { Pool } = require('pg');

// const client = new Client({
//   user: process.env.PGUSER,
//   host: process.env.PGHOST,
//   database: process.env.PGDATABASE,
//   password: process.env.PGPASSWORD,
//   port: process.env.PGPORT,
// });

// client.connect((err, res) => {
//   if (err) {
//     console.log('ERROR connecting to database: ', err.stack);
//   } else {
//     console.log(`Database Connected! Running on port ${process.env.PGPORT}`);
//   }
// });

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

pool.connect((err, client, release) => {
  if (err) {
    return console.error('Error acquiring client', err.stack);
  } else {
     console.log(`Database Connected! Running on port ${process.env.PGPORT}`);
  }
});


const retrieveInformationById = (id, callback) => {
  const getQuery = {
    text: 'SELECT product.*, protect.name AS protection_plan_name, protect.price AS protection_plan_price, protect.years, protect.provider, protect.rating, protect.description FROM product LEFT JOIN protection_plan protect ON product.protection_plan_id = protect.id WHERE product.id = $1',
    values: [id],
  };
  // client.query(getQuery, (err, res) => {
  pool.query(getQuery, (err, res) => {
    if (err) {
      callback(err.stack, null);
    } else {
      const { id, name, image, link, shares, price, is_prime, in_stock, giftwrap_available, quantity_max, seller, protection_plan_exists, protection_plan_id, protection_plan_name, protection_plan_price, years, provider, rating, description } = res.rows[0];
      const record = {
        product_id: id,
        name: name,
        image: image,
        link: link,
        shares: shares,
        price: price,
        is_prime: is_prime,
        in_stock: in_stock,
        giftwrap_available: giftwrap_available,
        quantity_max: quantity_max,
        seller: seller,
        protection_plan: {
          exists: protection_plan_exists,
          name: protection_plan_name,
          price: protection_plan_price, 
          years: years, 
          provider: provider,
          rating: rating,
          description: description,
        },
      };
      callback(null, record);
    }
  });
};

const insertProductRecord = (record, callback) => {
  const { name, image, link, shares, price, is_prime, in_stock, giftwrap_available, quantity_max, seller, protection_plan_exists } = record; 
  const protection_plan_id = Math.floor(Math.random() * Math.floor(10000000) +1);
  const postQuery = {
    text: 'INSERT INTO product (name, image, link, shares, price, is_prime, in_stock, giftwrap_available, quantity_max, seller, protection_plan_exists, protection_plan_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',
    values: [name, image, link, shares, price, is_prime, in_stock, giftwrap_available, quantity_max, seller, protection_plan_exists, protection_plan_id],
  };
  // client.query(postQuery, (err, res) => {
  pool.query(postQuery, (err, res) => {
    if (err) {
      callback(err.stack, null);
    } else {
      callback(null, res);
    }
  });
};

const updateRecord = (record, callback) => {
  const { id, column, newValue } = record;
  const putQuery = {
    text: `UPDATE product SET ${column} = $1 WHERE id = ${id}`,
    values: [newValue],
  };
  // client.query(putQuery, (err, res) => {
  pool.query(putQuery, (err, res) => {
    if (err) {
      callback(err.stack, null);
    } else {
      callback(null, res);
    }
  });
};

const deleteRecord = (record, callback) => {
  const { id } = record;
  const deleteQuery = {
    text: 'DELETE FROM product WHERE id = $1',
    values: [id],
  };
  // client.query(deleteQuery, (err, res) => {
  pool.query(deleteQuery, (err, res) => {
    if (err) {
      callback(err.stack, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  retrieveInformationById,
  insertProductRecord,
  updateRecord,
  deleteRecord 
};

