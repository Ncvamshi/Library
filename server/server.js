const express = require('express');
const app = express();
const {Sequelize} = require('sequelize');
const path = require('path');
const cors = require('cors');

//config/middleware
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:false }));
app.use(express.static(path.join(__dirname, '../build')));

//controllers
const booksController = require('./controllers/books_controller');
app.use('/api/books', booksController);

app.listen(4005,() => {
    console.log('server is running on post 4005');
})

app.get('*', (req,res)=> {
    res.sendFile(path.join(__dirname, '../build/index.html'));
})
