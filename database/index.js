const mongoose = require('mongoose');
mongoose.connect(process.env.MLAB_DB_URI);

const productSchema = new mongoose.Schema({
  product_id: Number,
  name: String,
  image: String,
  shares: Number,
  link: String,
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

