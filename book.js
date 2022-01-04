const mongoose = require('mongoose')
const {
  Schema
} = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  author: {
    type: String,
    required: true
  },
  ISBN: Number,
  yearPublication: Number,
  publishingHouse: String

},
{
  collection: 'books'
})


const Book = mongoose.model('Book', bookSchema);
//const book = new Book({_title:"The Remains of the Day", _author:"Kazuo Ishiguro", _ISBN: 0571153100, _yearPublication: 1989, _publishingHouse:"Faber"})


module.exports = Book
