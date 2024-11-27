const express = require('express');
const ejs = require('ejs');
const app = express();
const userRoutes = require('./routes/users.js')
require('dotenv').config();
const PORT = process.env.PORT || 8080;

app.set("view engine", "ejs");
app.set("views", "./views");


app.use(userRoutes);
app.use(express.static('public'));


app.listen(PORT, ()=>{
    console.log(`connected to PORT ${PORT}`);

});
