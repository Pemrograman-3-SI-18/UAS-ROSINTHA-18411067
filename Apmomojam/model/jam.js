const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    kodejam: {
        type: String
    },
    merkjam: {
        type: String
    },
    hargajam: {
        type: String
    },
    gambar: {
        type: String
    }
})
module.exports = mongoose.model('jam', userSchema)