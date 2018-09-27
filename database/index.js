const mongoose = require('mongoose');
// mongoose.connect(process.env.MLAB_DB_URI);
mongoose.connect('mongodb://localhost/optimizon', { useNewUrlParser: true });

var db = mongoose.connection;
db.on('error', console.log.bind(console, 'connection error:'));
db.once('open', console.log.bind(console, 'Database connected!'));

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

const insertRecord = (record, callback) => {
  const newRecord = new Product(record);
  newRecord.save((err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const updateRecord = (id, objectValue, callback) => {
  Product.updateOne({product_id: id}, {$set: objectValue}, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

const deleteRecord = (id, callback) => {
  Product.deleteOne({product_id: id}, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports = {
  retrieveInformationById,
  insertRecord,
  updateRecord,
  deleteRecord
};

