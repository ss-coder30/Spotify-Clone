const express = require('express');
const passport = require('passport');
const playlist = require('../models/playlist');
const User = require('../models/user');
const song = require('../models/song');

const router = express.Router();

//Route 1: Create a new playlist
router.post("/create", passport.authenticate("jwt", {session: false}), async (req, res) => {
    const currentUser = req.user; 
    const {name, thumbnail, songs} = req.body;
    
    if(!name || !thumbnail || !songs){
        return res
                    .status(301)
                    .json({error: "Insufficient details to create playlist"});
    }

    const playlistData = {name, thumbnail, songs, owner:currentUser._id, collaborators:[]}; 
    const user = req.user._id;
    const createdPlaylist = await playlist.create(playlistData);
    return res
                .status(200)
                .json(createdPlaylist);
});
//---------------------------------------------------------------------------------------------------------------------

//Route 2: Get all playlists by ID

// we use :playlistId to get the playlistId from the URL - playlistId is a variable here
router.get("/get/playlist/:playlistId", passport.authenticate("jwt", {session: false}), async (req, res) => {
    const user = req.user._id;
    const playlistId = req.params.playlistId;
    //req.params : playlistId is a variable here 
    const playlists = await playlist.findOne({_id: playlistId});
    if(!playlists){
        return res
                    .status(301)
                    .json({error: "Playlist not found"});
    }

    return res
                .status(200)
                .json(playlists);
});
//---------------------------------------------------------------------------------------------------------------------

//Route 3: Get all playlists by an artist

router.get("/get/artist/:artistId", passport.authenticate("jwt", {session: false}), async (req, res) => {
    const artistId = req.params.artistId;
    // we can check if artistId is valid or not
    const playlists = await playlist.find({owner: artistId});
    const artist = await User.findOne({_id: artistId});
    if(!artist){
        return res
                    .status(304)
                    .json({error: "Artist not found"});
    }

    return res
                .status(200)
                .json(playlists);
});
//---------------------------------------------------------------------------------------------------------------------

//Route 4: Add a song to a playlist
router.post("/add/song", passport.authenticate("jwt", {session: false}), async (req, res) => {
    const currentUser = req.user;
    const {playlistId, songId} = req.body;

    //Step 0: Get the playlist if valid or not
    const playlists = await playlist.findOne({_id: playlistId});
    if(!playlist){
        return res
                    .status(304)
                    .json({error: "Playlist not found"});
    }

    //Step 1: Check if current user is owner/collaborator of playlist or not
    if(!playlists.owner.equals(currentUser._id) && !playlists.collaborators.includes(currentUser._id)){
        return res
                    .status(400)
                    .json({error: "You are not authorized to add songs to this playlist"});
    }

    //Step 2: Check if songId is valid or not
    const Song = await song.findOne({_id: songId});
    if(!song){
        return res
                    .status(304)
                    .json({error: "Song not found"});
    }

    //Step 3: Add song to playlist

    playlists.songs.push(songId);
    await playlists.save();
    return res
                .status(200)
                .json(playlists);
});


module.exports = router;