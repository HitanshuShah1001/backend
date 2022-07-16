

const express = require('express')
const articles = require('./articles.js');
require('dotenv').config()
const app = express();

app.use(express.json())
const PORT = process.env.PORT || 443;
app.listen(PORT ,() => {
    console.log('Server is running');
})

app.get('/',(req,res) => {
    res.send('Running on port 443')
})


app.get('/article',(req,res) => {
    res.send(articles[Math.floor(Math.random()*articles.length)]);
})