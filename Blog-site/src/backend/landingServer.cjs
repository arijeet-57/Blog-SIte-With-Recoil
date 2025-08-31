const express = require("express");
const cors = require("cors");
const { User } = require("./db.cjs");

const app = express();

app.use(cors());
app.use(express.json());

//User Registration
app.post("/register", async function(req, res) {
    const {username, password} = req.body;

    try {
        const existingUser = await User.findOne({username, password});
        if (existingUser) {
            res.status(409).json({
                msg: "User already exists...Try Logging in"
            })
        };


        const newUser = new User({username, password});
        await newUser.save();
        res.json({
            msg: "User registered...Login using the same credentials"
        });
    }catch(err){
        res.status(404).json({
            msg:"Server side error..."
        })
    }
});


//User Login
app.post("/login", async function(req, res) {
    const {username, password} = req.body;

    try {
        const existingUser = await User.findOne({username, password});
        if (!existingUser) {
            res.status(409).json({
                msg: "User does not exists...Enter valid credentials"
            })
        };
        res.json({
            msg: "User logged in..."
        });
    }catch(err){
        res.status(404).json({
            msg:"Server side error..."
        })
    }
});


app.listen(4000, () => {
    console.log("Server is running on port 4000")
})