const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const products = require('./BackendHandling (Routes)/Products');
const orders = require('./BackendHandling (Routes)/Order');

const app = express();

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    // res.setHeader("Access-Control-Allow-Credentials", "false");
    res.header("Access-Control-Allow-Methods","GET,PATCH,POST,DELETE");
    res.header("Access-Control-Allow-Headers", "Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken,Keep-Alive,X-Requested-With,If-Modified-Since");
    next();
  });

  app.use("/api/products/", products );
  app.use("/api/orders/", orders );


mongoose.connect('mongodb+srv://SaimAshfaq:lithotripsy@carrentalapp.srkn1.mongodb.net/CarRentalApp?retryWrites=true&w=majority')
.then(()=>{
    app.listen(5000);
})
.catch((err)=>{
    console.log(err);
});
