const mongoose = require('mongoose');

const Song = new mongoose.Schema({
        name:{
            type: String,
            required: true,
        },
        thumbnail:{
            type: String,
            required: true,
        },
        track:{
            type: String,
            required: true,
        },
        artist:{
            type: mongoose.Types.ObjectId, // getting data from another collection
            ref: "User",
        },
    }
);

const SongModel = mongoose.model('Song', Song);
module.exports = SongModel;