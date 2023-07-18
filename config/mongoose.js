const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/to_do_database");

//acquire the connection (to chech if connected successfully)
const db = mongoose.connection;

//error
db.on('error',console.error.bind(console,"Error get to the database connection "));

//up and running and print the message
db.once('open',function(){
    console.log("successfully connected to database ");
})