const mongoose = require('mongoose'); //requires mongoose package

var schema = new mongoose.Schema({ //allows definition of shape and content of the doc
    FirstName:{
        type: String, //type must be string based
        required: true //requires an entry
    },
    LastName:{
        type: String,
        required: true
    },
    MovieTitle:{
        type: String,
        required: true
    },
    DateRented:{
        type: Date, //type must be date based
        required: true //requires an entry
    },
    DateReturned:{
        type: Date,
        required: true
    },
    RentalFee:{
        type: Number, //type must be number based
        required: true //requires an entry
    },
}) 

const movierentaltracker = mongoose.model('movierentaltrackerdb', schema); //calls a method of the mongoose model

module.exports = movierentaltracker; //exports the module