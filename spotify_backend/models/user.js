const mongoose = require('mongoose');
/* 
how to create a model - 
step 1; require mongoose
step 2: create a schema (structure of the user)
step 3: create a model (collection)
*/

const User = new mongoose.Schema({ 
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: false,
    },
    email:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    likedSongs:{
        type: Array,
        required: false,
    },
    likedPlaylists:{
        type: Array,
        required: false,
    },
    subscribedArtists:{
        type: Array,
        required: false,
    },
});

// export the model: mongoose.model('name of the model', schema)
const UserModel = mongoose.model('User', User);

module.exports = UserModel;