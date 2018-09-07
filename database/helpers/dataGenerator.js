const faker = require('faker');

module.exports.generateRandomData = (id) => {
  const obj = {
    protection_plan: {},
    used_option: {},
  };
  obj.product_id = id; // set dependent on loop iteration
  obj.name = faker.commerce.productName();
  obj.price = faker.commerce.price();
  obj.is_prime = faker.random.boolean();
  obj.in_stock = faker.random.boolean();
  obj.giftwrap_available = faker.random.boolean();
  obj.quantity_max = Math.floor(Math.random()*10) + 1;
  obj.seller = faker.company.companyName();

  obj.protection_plan.exists = faker.random.boolean();
  obj.protection_plan.name = faker.lorem.text();
  obj.protection_plan.price = faker.commerce.price();
  obj.protection_plan.years = Math.floor(Math.random()*5) +1;
  obj.protection_plan.provider = faker.company.companyName();
  obj.protection_plan.rating = Math.floor(Math.random()*5);
  obj.protection_plan.description = faker.lorem.paragraph();

  obj.used_option.exists = faker.random.boolean();
  obj.used_option.price = faker.commerce.price();
  return obj;
};
