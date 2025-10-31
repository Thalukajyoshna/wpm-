// ...existing code...
const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI || 'mongodb://localhost/Loc8r';

if (!uri) {
  console.warn('MONGODB_URI not set — skipping DB connection');
  module.exports = null;
} else {
  // don't pass deprecated driver options; mongoose handles defaults
  mongoose.connect(uri)
    .then(() => console.log('Mongoose connected to', uri))
    .catch(err => {
      console.error('Mongoose connection error:', err.message || err);
    });
  module.exports = mongoose;
}
// ...existing code...