'use strict'

// express
const express = require('express');
const app = express();

// Declaramos midleware
const morgan = require('morgan');
const path = require('path');

// Declaramos handlebars
const { engine } = require('express-handlebars');

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}))

// Routes
app.use('/products', require('./routes/products'));
app.use('/carts', require('./routes/carts'));
app.use('/productCreate', (req, res) =>{
    res.render('newProduct')
})


app.use(express.static(path.join(__dirname, 'src')));

// Template
app.set('view engine', 'hbs');
app.set('views', path.join( __dirname, './views'));
app.engine('hbs', 
    engine({
    extname: '.hbs',
    defaultLayout: 'main.hbs',
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
}))

module.exports = app;