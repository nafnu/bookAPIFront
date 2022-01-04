const express = require('express')
const router = express.Router()

router.get('/book', (req, res) => {
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
  router.get('/book/:id', (req, res) => {
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
  router.post('/book', (req, res) => {
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
  router.delete('/book/:id', (req, res) => {
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
  router.put('/book/:id', (req, res) => {
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

module.exports = router