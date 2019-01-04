const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
const route = require('./route/routes');

mongoose.connect('mongodb://localhost:27017/shoppinglist',{ useNewUrlParser: true });

mongoose.connection.on('connected', ()=>{
  console.log("connected to the database");
});

mongoose.connection.on('error', (err)=>{
  console.log(err);
});

app.get('/',(req,res)=>{
  res.send("Routing Works! Go Ahead!");
})

//Creating and Passing Middleware
app.use(cors());
app.use(bodyparser.json());
app.use('/api',route);


const port = 4000;


app.listen(port,()=>{
  console.log(`Server is running on port no. ${port}`);
})