

const express = require('express')
const articles = require('./articles.js');

const app = express();

app.use(express.json())
app.listen(3000,() => {
    console.log('Server is running');
})

app.get('/',(res) => {
    res.send('Running on port 3000')
})


app.get('/article',(req,res) => {
    res.send(articles,JSON.parse(Object.keys(articles).length))
})