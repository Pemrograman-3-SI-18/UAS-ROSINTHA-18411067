const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    username: {
        type: String
    },
    password: {
        type: String
    },
    email: {
        type: String
    },
    noTelp: {
        type: String
    },
    role: {
        type: Number
    },
    alamat: {
        type: String
    },
})
    module.exports = mongoose.model('pengguna', userSchema)