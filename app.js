const express = require('express');

const app = express();

app.createServer((req, res) => {
    res.end("Welcome to my Homepage")
})

app.listen(3000, (err) => {
    if(err) throw err;
    console.log('Server running at http://localhost:3000/');
})
