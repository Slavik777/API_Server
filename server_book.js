const express = require("express")
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const COLLECTION = 'books';
const PORT = 3000;

let db;

MongoClient.connect('mongodb://root:goodram099@ds247223.mlab.com:47223/books-data-base', (err, client) => {
  if (err) return console.log(err)
  db = client.db('books-data-base') 
  app.listen(PORT, () => {
    console.log('Books server is listening on 3000')
  })
})


const app = express()

app.use(bodyParser.json())

app.get("/book", (req, res) => {
    db.collection(COLLECTION).find().toArray(function(err, results) {
        res.send(results)
    });
})

app.post('/book', (req, res) => {
    db.collection(COLLECTION).save(req.body, (err, result) => {
        if (err) return console.log(err)
        res.send();
    })
  });

app.delete("/book/:id", (req, res) => {
    db.collection(COLLECTION).remove({ _id: mongodb.ObjectId(req.params.id) } , (err) => {
        if (err) throw err
        res.send()
    });
});

app.put("/book/:id", (req, res) => {
    db.collection(COLLECTION).update(
        { _id: mongodb.ObjectId(req.params.id) },
        req.body,
        (err) => {
            if (err) throw err
            res.send()
    });
});
