const faker = require('faker');
const fs = require('fs');
const cats = require('../helpers/cats.js');

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRecord = (id) => {
  const product_id = id;
  const name = 'shirt' + id;
  const image = cats.data[getRandomIntInclusive(0, 32)]
  const link = faker.lorem.sentence();
  const shares = Math.floor(Math.random() * 100) + 1;
  const price = faker.commerce.price();
  const is_prime = faker.random.boolean();
  const in_stock = faker.random.boolean();
  const giftwrap_available = faker.random.boolean();
  const quantity_max = Math.floor(Math.random() * 10) + 1;
  const seller = faker.company.companyName();

  const protection_plan_exists = faker.random.boolean();
  const protection_plan_name = faker.lorem.text();
  const protection_plan_price = (Math.random() * (1000) / 100).toFixed(2);
  const protection_plan_years = Math.floor(Math.random()*5) +1;
  const protection_plan_provider = faker.company.companyName();
  const protection_plan_rating = Math.floor(Math.random()*5);
  const protection_plan_description = faker.lorem.lines();

  return `${product_id},${name},${image},${link},${shares},${price},${is_prime},${in_stock},${giftwrap_available},${quantity_max},${seller},${protection_plan_exists},${protection_plan_name},${protection_plan_price},${protection_plan_years},${protection_plan_provider},${protection_plan_rating},${protection_plan_description}`;
};

const generateDataSet = () => {
  let data = 'product_id,name,image,link,shares,price,is_prime,in_stock,giftwrap_available,quantity_max,seller,protection_plan_exists,protection_plan_name,protection_plan_price,protection_plan_years,protection_plan_provider,protection_plan_rating,protection_plan_description\n';
  const totalRecords = 1000000; //10000000
  const batchSize = 250000; //250000
  const totalBatches = totalRecords / batchSize; //40, last batchNumber will be 39

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

generateDataSet();