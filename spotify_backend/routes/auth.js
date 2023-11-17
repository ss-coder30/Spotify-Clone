const express = require('express');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const {getToken} = require('../utils/helpers')

const router = express.Router(); 
//---------------------------------------------------------------------------------------------------------------------------------------
//this post route will help to register the user
router.post("/register", async (req, res) =>{
    // this code will run when /register API will called by POST method
    // req.body will be of format {email, password, firstName, lastName, userName}
    const {email, password, firstName, lastName, username} = req.body;
    //step 2: to check whether the user is already registered or not. If yes, throw an error
    const user = await User.findOne({email: email});
    if(user){
        
        return res
            .status(403)
            .json({error: "A user with this email already exists"});
    }

    // Else This is a valid request

    //step 3: Create a new user in the DB

    //step 3.1: we do not store password in plain text
    // we convert plain text password into hash
    const hashedPassword = bcrypt.hash(password, 10);

    const newUserData = {email, hashedPassword, firstName, lastName, username};
    const newUser = await User.create(newUserData);

    //step 4: we want to create token to return to the user
    const token = await getToken(email, newUser);

    // this getToken function will be used in many places like login etc, so it will be created in new file called helpers.js
    // in utils directory

    // step5: Return the result to user
    const userToReturn = {...newUser.toJSON(), token};
    delete userToReturn.password; // to increase security

    return res
        .status(200)
        .json(userToReturn);
})
//-----------------------------------------------------------------------------------------------------------------------------
router.post("/login", async (req, res) => {
    // step 1: get email and password from req.body
    const {email, password} = req.body;

    // step 2: check if the user exists in DB or not. If not, credentials are invalid
    const user = await User.findOne({email: email});
    if(!user){
        return res
            .status(403)
            .json({error: "Invalid Credentials"});
    }

    // step 3: check if the password is correct or not. If not, credentials are invalid (tricky)
    // because we have stored hashed password
    //If parameters are kept same for the hashed password, hash will always remain same
    // we are comparing 2 hashes
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(!isPasswordValid){
        return res
            .status(403)
            .json({error: "Invalid Credentials"});
    }

    // step 4: If crdentials are correct, create token and return to user
    const token = await getToken(user.email, user);
    const userToReturn = {...user.toJSON(), token};
    delete userToReturn.password;
    return res  
                .status(200)
                .json(userToReturn);
});

module.exports = router;
