const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    backgroundImage: {
        type: String,
        required: true,
        default: '/img/imagen5.png' 
    }
});

const aboutSchema=new mongoose.Schema({


});