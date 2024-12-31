const express = require('express');
const morgan = require ('morgan');
const app = express();
const productRouter = require('./app/v1/routes/product');

app.use(morgan('dev'));
app.use (express.json());
app.use(express.urlencoded({extended: true}));

console.log(process.env.GOOGLE_USER);

const secure = require('./app/v1/middelewares/secure');
app.use (secure);

app.use('/product',productRouter);


module.exports = app;