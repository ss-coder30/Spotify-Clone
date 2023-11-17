const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
const passport = require('passport');
const User = require('./models/user');
const authRoutes = require('./routes/auth')
const songRoutes = require('./routes/song');
const playlistRoutes = require('./routes/playlist');
const cors = require('cors');

const app = express();
const port = 8080;

app.use(cors());

app.use(express.json());

//connect mongoDB to node app
//mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true}) 
// DB_url - we will get this from mongoDB atlas by "connect your application" option
mongoose.connect("mongodb+srv://30shaurya:" + process.env.Mongo_password + "@cluster0.om4yn3m.mongodb.net/?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology: true})
.then((x)=>{
    console.log(`Connected to Mongo!`);
})
.catch((error) => {
    console.log(`Error connecting to Mongo: ${error}`);
}); // to handle the errors after connecting to mongoDB
// if error - bad authentication - reset new cluster password and use it

//setup passport-jwt
// used for password management and authentication for users
// site link for code - https://www.passportjs.org/packages/passport-jwt/

let opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = "secret";
passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findOne({id: jwt_payload.sub}).then((user, err) => {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
        }

    });
}));


//API : get type
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.use("/auth", authRoutes);
app.use("/song", songRoutes);
app.use("/playlist", playlistRoutes);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});