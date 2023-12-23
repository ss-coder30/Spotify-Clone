const express = require('express');
const passport = require('passport');
const song = require('../models/song');
const User = require('../models/user');


const router = express.Router();
//---------------------------------------------------------------------------------------------------------------------
router.post("/create", passport.authenticate("jwt", {session: false}), async (req, res) => {
    //req.user gets user because of passport.authenticate("user") middleware
    const {name, thumbnail, track} = req.body;
    if(!name || !thumbnail || !track){
        return res
                    .status(301)
                    .json({error: "Insufficient details to create song"});
    }

    const artist = req.user._id;
    const songDetails = {name, thumbnail, track, artist};
    const createdSong = await song.create(songDetails);
    return res
                .status(200)
                .json(createdSong);
});
//----------------------------------------------------------------------------------------------------------

// get route to song published
router.get("/get/mysongs", passport.authenticate("jwt", {session: false}), async (req, res) => {    
    const artist = req.user._id;
    const songs = await song.find({artist:req.user._id}).populate("artist");
    return res
                .status(200)
                .json(songs);
}); 
//---------------------------------------------------------------------------------------------
// get route to get all songs any artist has published 
router.get("/get/artist/:artistId", passport.authenticate("jwt", {session: false}), async (req, res) => {
    const {artistId} = req.params;
    // we can check if artistId is valid or not
    const artist = await User.findOne({_id: artistId});
    console.log(artist);
    if(!artist){
        return res
                    .status(301)
                    .json({error: "Artist not found"});
    }

    const songs = await song.find({artist: artistId});
    return res
                .status(200)
                .json(songs);
});

//---------------------------------------------------------------------------------------------
// get route to get all songs by name
router.get("/get/songname/:songName", passport.authenticate("jwt", {session: false}), async (req, res) => {
    const {songName} = req.params;
    const songs = await song.find({name: songName}).populate("artist");
    return res
                .status(200)
                .json(songs);
});

module.exports = router;