const mongoose = require('mongoose')
const {
  Schema
} = mongoose;

const bookSchema = new Schema({
  title: String,
  author: String,
  ISBN: Number,
  yearPublication: Number,
  publishingHouse: String

})


const Book = mongoose.model('Book', bookSchema);
//const book = new Book({_title:"The Remains of the Day", _author:"Kazuo Ishiguro", _ISBN: 0571153100, _yearPublication: 1989, _publishingHouse:"Faber"})


module.exports = Book


//*********** OLD CODE - BEFORE SCHEMA OF MONGODB - NOT REQUIRED!  ONLY FOR REFERENCE *************

// module.exports = class Book {
//     constructor(_title, _author, _ISBN, _yearPublication, _publishingHouse) {
//         this._title = _title;
//         this._author = _author;
//         this._ISBN = _ISBN;
//         this._yearPublication = _yearPublication;
//         this._publishingHouse = _publishingHouse;

//     }

//     get title(){
//         return this._title;

//     }
//     setTitle(t){
//         this._title = t;
//     }

//     get author(){
//         return this._author;

//     }
//     setAuthor(h){
//         this._author = h;
//     }

//     get ISBN(){
//         return this._ISBN;

//     }
//     setISBN(b){
//         this._ISBN = b;
//     }

//     get yearPublication(){
//         return this._yearPublication;

//     }
//     setYearPublication(y){
//         this._yearPublication = y;
//     }

//     get publishingHouse(){
//         return this._publishingHouse;

//     }
//     setPublishingHouse(p){
//         this._publishingHouse = p;
//     }


// }

//*********** OLD CODE! - NORMAL CONSTRUCTOR TO CONNECT WITH POSTMAN - NOT REQUIRED!  ONLY FOR REFERENCE *************


// let bookOne = new Book('The Remains of the Day','Kazuo Ishiguro',0-571-15310-0, 1989, 'Faber and faber');

// console.log(bookOne.author);
// console.log(bookOne.yearPublication);

// class Notebook{
//     constructor() {
//         this.name = 'notebook'
//     }
// }

// module.exports = {
//     Book,
//     Notebook
// }