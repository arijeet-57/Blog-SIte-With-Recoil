const express = require("express");
const cors = require("cors");
const { User, Blogs } = require("./db.cjs");
const { date } = require("zod/v4");
const moment = require("moment-timezone");

const app = express();

app.use(cors());
app.use(express.json());

//User Registration
app.post("/register", async function(req, res) {
    const {username, password} = req.body;

    try {
        const existingUser = await User.findOne({username, password});
        if (existingUser) {
          return  res.status(409).json({
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
          return res.status(409).json({
                msg: "User does not exists...Enter valid credentials"
            })
        }
        res.json({
            msg: "User logged in...",
            username: existingUser.username //sending the usrname in the response so that the frontend can store it in the local storage
        });
    }catch(err){
        res.status(404).json({
            msg:"Server side error..."
        })
    }
});



//route for posting the blog    
app.post("/write", async function(req, res) {
    const {title, description} = req.body;
    const isNow = moment.tz("Asia/Kolkata").format("YYYY-MM-DD");

    if(!title || !description) {
        res.json({
            msg: "Fields cannot be empty..."
        })
    }else{
    const newBlog = new Blogs({title, description, date: isNow});
    await newBlog.save();
    res.json({
            msg: "Entry done"
        })
    }
}) ;


app.listen(4000, () => {
    console.log("Server is running on port 4000")
})