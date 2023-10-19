const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
mongoose.connect("mongodb://127.0.0.1:27017/MERN_FULLSTACK");
const User = require("./userSchema");
const app = express();
app.use(express.json());
app.use(cors());

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);
    const newuser = await User.create({
      Name: name,
      Email: email,
      Password: password,
    });

    res.json(newuser);
  } catch (err) {
    res.json(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    const { email,password } = req.body;
    console.log(email);
    const loginuser = await User.findOne({ Email: email,Password:password });
    if (!loginuser) {
      res.json("no user found");
    }
    res.json("success");
  } catch (err) {
    res.status(500).json({ error: "Internal server error." });
  }
});

app.listen(8000, () => {
  console.log("app running on Port 8000");
});
