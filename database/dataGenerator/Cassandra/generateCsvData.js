// const faker = require('faker');
const fs = require('fs');
const cats = require('../../helpers/cats.js');
const fakerData = require('../PostgreSql/fakerData.js');

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRecord = (id) => {
  const product_id = id;
  const name = 'shirt' + id;
  const image = cats.data[getRandomIntInclusive(0, 32)]
  const link = fakerData.sentences[getRandomIntInclusive(0, 99)];
  const shares = Math.floor(Math.random() * 100) + 1;
  const price = fakerData.prices[getRandomIntInclusive(0, 99)];
  const is_prime = fakerData.booleans[getRandomIntInclusive(0, 1)];
  const in_stock = fakerData.booleans[getRandomIntInclusive(0, 1)];
  const giftwrap_available = fakerData.booleans[getRandomIntInclusive(0, 1)];
  const quantity_max = Math.floor(Math.random() * 10) + 1;
  const seller = fakerData.companyNames[getRandomIntInclusive(0, 99)];
  const protection_plan_exists = fakerData.booleans[getRandomIntInclusive(0, 1)];
  const protection_plan_name = fakerData.words[getRandomIntInclusive(0, 99)];
  const protection_plan_price = (Math.random() * (1000) / 100).toFixed(2);
  const protection_plan_years = Math.floor(Math.random()*5) +1;
  const protection_plan_provider = fakerData.companyNames[getRandomIntInclusive(0, 99)];
  const protection_plan_rating = Math.floor(Math.random()*5);
  const protection_plan_description = fakerData.sentences[getRandomIntInclusive(0, 99)];

  return `${product_id}|${name}|${image}|${link}|${shares}|${price}|${is_prime}|${in_stock}|${giftwrap_available}|${quantity_max}|${seller}|${protection_plan_exists}|${protection_plan_name}|${protection_plan_price}|${protection_plan_years}|${protection_plan_provider}|${protection_plan_rating}|${protection_plan_description}`;
};

const generateDataSet = (records, batch) => {
  let data = 'product_id|name|image|link|shares|price|is_prime|in_stock|giftwrap_available|quantity_max|seller|protection_plan_exists|protection_plan_name|protection_plan_price|protection_plan_years|protection_plan_provider|protection_plan_rating|protection_plan_description\n';
  const totalRecords = records;
  const batchSize = batch;
  const totalBatches = totalRecords / batchSize;

  const buildNextBatch = (batchNumber) => {
    if (batchNumber === totalBatches) {
      return;
    } else {
      data = '';
      for (let i = batchNumber * batchSize + 1; i <= batchSize * (batchNumber + 1); i++) {
        data += generateRecord(i) + '\n';
        console.log(i);
      }
      fs.appendFile('dataSet.csv', data, 'utf8', (err) => {
        if (err) {
          console.log(`ERROR generating batch ${batchNumber}`);
        }
        console.log(`Batch ${batchNumber} has just completed!`);
        buildNextBatch(batchNumber + 1);
      });
    }
  };
  
  fs.writeFile('dataSet.csv', data, 'utf8', (err) => {
    if (err) {
      console.log('ERROR inserting header row');
    }
    buildNextBatch(0);
  });
};

generateDataSet(10000000,500000);