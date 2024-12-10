const mongoose = require('mongoose');

const AccountSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true,
        unique: true
    },
    PhoneNum: {
        type: String,
        required: true
    },
    Username: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true,
        minlength: 8
    }
},{ versionKey: false });

mongoose.model('Accounts', AccountSchema, 'Accounts');
