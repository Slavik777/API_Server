const express = require("express");
const axios = require("axios");
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

app.listen(5000, () => {
    console.log('Gateway server is listening on 5000')
  });

app.get("/user", (req, res) => {
    axios.get("http://localhost:4000/user").then(result => {
        res.send(result.data);
    })
});

app.get("/book", (req, res) => {
    axios.get("http://localhost:3000/book").then(result => {
        res.send(result.data);
    })
});

app.put("/user/:id", (req, res) => {
    axios.put("http://localhost:4000/user/" + req.params.id, req.body).then(result => {
        res.send(result.data);
    })
});
app.put("/book/:id", (req, res) => {
    axios.put("http://localhost:3000/book/" + req.params.id, req.body).then(result => {
        res.send(result.data);
    })
});

app.delete("/user/:id", (req, res) => {
    axios.delete("http://localhost:4000/user/" + req.params.id).then(result => {
        res.send(result.data);
    })
});
app.delete("/book/:id", (req, res) => {
    axios.delete("http://localhost:3000/book/" + req.params.id).then(result => {
        res.send(result.data);
    })
});

app.post("/user", (req, res) => {
    axios.post("http://localhost:4000/user", req.body).then(result => {
        res.send(result.data);
    })
});
app.post("/book", (req, res) => {
    axios.post("http://localhost:3000/book", req.body).then(result => {
        res.send(result.data);
    })
});
