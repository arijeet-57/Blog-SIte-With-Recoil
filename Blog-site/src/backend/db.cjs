const mongoose = require("mongoose");
const { Schema, date } = require("zod");

mongoose.connect("mongodb://localhost:27017/blog-site-recoil");

const userSchema = new mongoose.Schema({
    username : String,
    password : String
})

const blogSchema = new mongoose.Schema({
    username : {type: String, ref: "User"},
    title : String,
    description : String,
    date: {type: Date, default: Date.now}
});

const User = mongoose.model("User", userSchema);
const Blogs = mongoose.model("Blogs", blogSchema);

module.exports = {
    User,
    Blogs
}

