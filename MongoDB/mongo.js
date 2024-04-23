require('dotenv').config();
console.log(process.env.MONGO_URL);
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true, 
 useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
 console.log('connected to mongo');
});


const mongoose = require('mongoose');
// define a schema that maps to the structure of the data in MongoDB
const bookSchema = new mongoose.Schema({
 id: Number,
 isbn10: String,
 isbn13: String,
 title: String,
 year: Number,
 publisher: String,
 production: {
 status: String,
 binding: String,
 size: String,
 pages: Number,
 instock: String
 },
 category: {
 main: String,
 secondary: String
 }
});
// now create model using this schema that maps to books collection in database
module.exports = mongoose.model('Book', bookSchema,'books')