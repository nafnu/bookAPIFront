
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const mongoose = require('mongoose')
const Book = require('./book.js')

//const path = require('path');


//app plugins or labraries
app.use(bodyParser.urlencoded({ extended: false }))

//API ROUTES

//SHOW all dogs from the database using GET request
app.get('/book', (req, res) => {
  Book.find((err, books) => {
      if (err) {
      res.send("Error occured no book retrieved")
      return
    }
    res.send(books)
    console.log(books)
  })
})

// FIND ONE BY ID, using a GET REQUEST and A PARAMETER (id)
app.get('/book/:id', (req, res) => {
  const id = req.params.id;
   Book.findById(id, (err, book) => {
    if (err) {
      res.send("Book not found")
      return
    }
    res.send(book)
    console.log(book)
  })
})


//INSERT request using POST to add a book into the database
app.post('/book', (req, res) => {
  console.log("Inserting a book in the database")
  let book = new Book({
    title: req.body.title, 
    author: req.body.author, 
    ISBN: parseInt(req.body.ISBN), 
    yearPublication: parseInt(req.body.yearPublication), 
    publishingHouse: req.body.publishingHouse,
  });
  book.save(err => {
    if (err) {
        res.send(`Book not inserted into the database, error is: ${err}`)
        return
    }
    res.send("Book inserted into the database")
    console.log("Book is in the database")
  })
  return
})

//DELETE request using DELETE and a PARAMETER (id)
app.delete('/book/:id', (req, res) => {
  Book.findByIdAndDelete(req.params.id, err => {
    if (err) {
      res.send("Book did not delete")
      return
    }
    res.send("Book deleted")
    console.log(`Book with id ${req.params.id} is now deleted`)
  })
})

// PUT request to update or modify one dog from the database
app.put('/book/:id', (req, res) => {
  console.log("Trying to edit book")
  console.log(parseInt(req.body.ISBN))


  Book.findByIdAndUpdate(req.params.id, {
    title: req.body.title,
    ISBN: ((parseInt(req.body.ISBN) == NaN) ? 0 : parseInt(req.body.ISBN)),
    author: req.body.author,
    publishingHouse: req.body.publishingHouse,
    yearPublication: (parseInt(req.body.yearPublication))
  }, err => {
    if (err) {
      res.send("It didn't edit. The error is: " + err)
      return;
    }
    res.send("It did edit")
  })
})


//START the server
app.listen(port, () => {
  mongoose.connect('mongodb+srv://admin:ADMIN@bookapi.d2gse.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').
    catch(error => console.log(error));
  console.log(`Example app listening at http://localhost:${port}`)
})


//*********** OLD CODE - BEFORE SCHEMA OF MONGODB - NOT REQUIRED!  ONLY FOR REFERENCE *************

// app.post('/book', (req,res)=>{
//   console.log("Inserting a book in the database")
//   book.save()
//   res.send("Book saved")

// })

//*********** OLD CODE!  - NORMAL CONSTRUCTOR TO CONNECT WITH POSTMAN - NOT REQUIRED!  ONLY FOR REFERENCE *************

// let book1 = new Book('The Remains of the Day', 'Kazuo Ishiguro', 0571153100, 1989, 'Faber');
// let book2 = new Book('The Shoemaker and his daughter', 'Conor OClery', 9781784163112, 2018, 'Penguin');

// let books = [book1, book2]


// app.get('/', (req, res) => {
//   res.send('Hello Nathalie!')
// })

// app.get('/message', (req, res) => {
//   res.send('Hi, this is a nice message')
// })

// app.get('/othermessage', (req, res) => {
//   res.send('This is a second message')
// })

// app.get('/showbook', (req, res) => {
//   console.log('Someone is requiring a book:')
//   res.send(books)
// })

// app.post('/showbook', (req, res) => {
//   //insert using post!
//   console.log('Someone is requiring a book:');
//   res.send('Congrats, you posted something');
//   console.log(req.body);
//   // let title = req.body.title;
//   // let author = req.body.author;
//   // let ISBN = parseInt(req.body.ISBN);
//   // let yearPublication = req.body.title);
//   // let publishingHouse = req.body.publishingHouse);
//   let book3 = new Book(req.body.title, req.body.author, parseInt(req.body.ISBN), req.body.title, req.body.publishingHouse);
//   books.push(book3) 
//   console.log(book3)

// })


// app.delete('/deletebook/:title', (req, res) => {
//   //"books" is the database
//   //newbooksArray is a holder for the updated Database
//   let newBooksArray =[];
//   //for loop in JavaScript, takes each element and assigns it to the variable "d"
//   //
//   books = books.forEach(d =>{
//     //checks to see if the name from the parameter matches the dogs name
//     if(!(d._title === req.params.title)){
//       //if it doesn't match, add it to the new array
//        newBooksArray.push(d)
//     }
//   })
//   console.log("Book deleted, new database looks like this")
//   console.log(newBooksArray);
//   //update the "database / dogs"
//   books = newBooksArray;
//   //send a result to postman/user so it doesn't get stuck on loading
//   res.send("Delete in progress");

//   console.log(req.params);
// })

// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

