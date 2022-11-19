const express  = require('express'); //requires express package
const app = express();
const morgan = require('morgan'); //requires morgan package
app.set("view engine", "ejs") //sets the default view engine as ejs package
const path = require('path'); //requires path package
const dotenv = require('dotenv'); //requires dotenv pckage for config.env
const mongoose = require('mongoose'); //requires mongoose package
dotenv.config({ path: "./config.env" }); //import config.env file
const axios = require('axios'); //requires axios package

const connectDB = process.env.MONGO_URL; //links to the MONGO_URL from the config.env file

mongoose //connects to mongoose and MongoDB
  .connect(connectDB, {
    usenewurlparser: true,
    useunifiedtopology: true,
  })
  .then(() => {
    console.log("Successfully connected to MongoDB "); //sends message in console that connection to MongoDB is successful
  })
  .catch((error) => {
    console.log(`can not connect to database, ${error}`); //sends error message in console if connection is not successful
  });

app.use('/css', express.static(path.resolve(__dirname, "assets/css"))) //loads in our assets from the assets/css folder
app.use('/imgs', express.static(path.resolve(__dirname, "assets/imgs"))) //loads in our assets from the assets/imgs folder
app.use('/js', express.static(path.resolve(__dirname, "assets/js"))) //loads in our assets from the assets/js folder

app.use('/', require('./server/routing/routes')) //requires routing from the routes.js file

const hostname = '127.0.0.1';
const PORT = 4000; //says which port im running the server on

app.listen(PORT, ()=> {console.log('Server is running on local host')}) //sends message in console saying im running on local host