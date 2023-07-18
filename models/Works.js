const mongoose = require('mongoose');

//Create a Schema 
const workSchema = new mongoose.Schema({
    Description :{
        type:String,
        required: true,
    },
    Category: {
        type: String,
        required: true,
    },
    Date: {
        type: Date,
        required: true,
    }
});

// Define the collection of schema
const Works = mongoose.model('Works',workSchema); //    mongoose.model('collectionName',SchemaName)

module.exports=Works;