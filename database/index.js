// const helper = require('./helpers/dataGenerator.js')
const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/products');
mongoose.connect('mongodb://mattminwoolee:password123@ds147942.mlab.com:47942/front-end-capstone');

const productSchema = new mongoose.Schema({
  product_id: Number,
  name: String,
  price: Number,
  is_prime: Boolean,
  in_stock: Boolean,
  giftwrap_available: Boolean,
  quantity_max: Number,
  seller: String,
  protection_plan: {
    exists: Boolean,
    name: String,
    price: Number,
    years: Number,
    provider: String,
    rating: Number,
    description: String,
  },
  used_option: {
    exists: Boolean,
    price: Number,
  },
});

const Product = mongoose.model('Product', productSchema);

// const generateRandomData = () => {
//   for (var id = 1; id <= 100; id++) {
//     // let checkoutProduct = helper.generateRandomData(id);
//     var newEntry = new Product(helper.generateRandomData(id));
//     newEntry.save();
//   }
// }

// generateRandomData();

const retrieveInformationById = (id, callback) => {
  Product.find({ product_id: id }, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  retrieveInformationById,
};
