const path = require('path');
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();

// importing routes
const indexRoutes = require('./routes/index');


// settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));

// Configuración para servir archivos estáticos
app.use(express.static(path.join(__dirname,'model')));
// routes
app.use('/', indexRoutes);

app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')}`);
});
