const express = require("express")
const bodyParser = require('body-parser')
const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient
const COLLECTION = 'users';

let db;

MongoClient.connect('mongodb://root:goodram099@ds141720.mlab.com:41720/user_books', (err, client) => {
  if (err) return console.log(err)
  db = client.db('user_books') 
  app.listen(4000, () => {
    console.log('User server is listening on 4000')
  })
})


const app = express()

app.use(bodyParser.json())

app.get("/user", (req, res) => {
    db.collection(COLLECTION).find().toArray(function(err, results) {
        res.send(results)
    });
})

app.post('/user', (req, res) => {
    db.collection(COLLECTION).save(req.body, (err, result) => {
        if (err) return console.log(err)
        res.send();
    })
  });

app.delete("/user/:id", (req, res) => {
    db.collection(COLLECTION).remove({ _id: mongodb.ObjectId(req.params.id) } , (err) => {
        if (err) throw err
        res.send()
    });
});

app.put("/user/:id", (req, res) => {
    db.collection(COLLECTION).update(
        { _id: mongodb.ObjectId(req.params.id) },
        req.body,
        (err) => {
            if (err) throw err
            res.send()
    });
});
