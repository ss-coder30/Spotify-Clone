const mongoose = require('mongoose');

const Playlist = new mongoose.Schema({
        name:{
            type: String,
            required: true,
        },
        thumbnail:{
            type: String,
            required: true,
        },
        
        owner:{
            type: mongoose.Types.ObjectId,
            ref: "user",
        },
        songs:[ // way to declare an array of objects
            {
                type: mongoose.Types.ObjectId,
                ref: "song",
            }
        ],
        collaborators:[
            {
                type: mongoose.Types.ObjectId,
                ref: "user",
            }
        ]
    }
);

const PlaylistModel = mongoose.model('Playlist', Playlist);
module.exports = PlaylistModel;