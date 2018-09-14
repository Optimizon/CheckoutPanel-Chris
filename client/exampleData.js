const data = {
  protection_plan: {
    exists: true, // (GOOD)
    name: 'consequuntur repellendus saepe', // (GOOD)
    price: 182, // <-- not too sure what digits place to set this to (GOOD)
    years: 5, // (GOOD)
    provider: 'Gulgowski Inc', // (GOOD)
    rating: 4,
    description: 'Et non id. Laudantium quae dolorum dolorem quia debitis explicabo quia fuga assumenda. Sed natus alias delectus. Amet incidunt quae velit dolores et eaque adipisci.'  
  },
  used_option: {
    exists: false,
    price: 910,
  },
  product_id: 1,
  name: 'Google Wifi System, Router Replacement Whole Home Coverage', // (GOOD)
  link: 'consectetur', // one word (GOOD)
  shares: 89, // (GOOD)
  price: 109, // between 1-1000 (GOOD)
  is_prime: true, // (GOOD)
  in_stock: true, // (GOOD)
  giftwrap_available: true, // (GOOD)
  quantity_max: 6, // 1-10 (GOOD)
  seller: 'Google', // one word usually (GOOD)
};

module.exports.data = data;
