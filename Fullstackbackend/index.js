var express = require("express");
var path = require("path");
var mdb = require("mongoose");
var User = require("./models/users");
var cors = require("cors");
var app = express();
//var env=require('dotenv').config
var env=require('dotenv')
const PORT = 3001;
env.config()
app.use(express.json());
app.use(cors());

mdb
  .connect(process.env.MONGO_URL)
  .then(() => {
   
    console.log("MongoDB Connection Successful");
  })
  .catch(() => {
    console.log("Check your Connection String");
  });

app.get("/", (req, res) => {
  //res.json({server:"Welcome to Backend",url:"localhost",port:"PORT"})
  res.send("Welcome to Backend Server"); //first response will be display
  //res.json("Welcome to Backend Server")
});
/*app.post("/signup", (req, res) => {
  var { firstName, lastName, email, password } = req.body;
  //console.log(firstName, lastName, email);
  //res.send("hello")
  try {
    var newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    });

    var newUser = new User(req.body);
    console.log(req.body.password);

    newUser.save();
    console.log("User Added Successfully");
    res.status(200).send("User Added Successfully");
  } catch (err) {
    console.log(err);
  }
});
*/
app.post("/signup", async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  try {
    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists!" });
    }

    // Create new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
    });

    await newUser.save();
    console.log("User Added Successfully");
    res.status(201).json({ message: "User Added Successfully" });
  } catch (err) {
    console.log("Error creating user:", err);
    res.status(500).json({ message: "Signup failed! Server error." });
  }
});
app.get("/json", (req, res) => {
  res.json({ server: "Welcome to Backend", url: "localhost", port: "PORT" });
  //res.send("Welcome to Backend Server")  //first response will be display
  //res.json("Welcome to Backend Server")
});
app.get("/static", (req, res) => {
  //console.log(_dirname);
  //res.sendFile('D:\fullstackTraining\Fullstackbackend\index.html')
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.get("/getsignup", async (req, res) => {
  try {
    var allSignUpRecords = await User.find();
    res.json(allSignUpRecords);
    console.log("All Data fetched");
  } catch (err) {
    console.log(err);
    res.send(err);
    //console.log("Cannot able to read the Records");
  }
});

app.post("/login", async (req, res) => {
  var { email, password } = req.body;
  try {
    var existinguser = await User.findOne({ email: email });
    console.log(existinguser);
    if (existinguser) {
      if (existinguser.password == password) {
        res.json({ message: "Login successful", loggedIn: true });
      } else {
        res.json({ message: "Invalid Password", loggedIn: false });
      }
    } else {
      res.json({ message: "Invalid Email or Password", loggedIn: false });
    }
  } catch (err) {
    console.log("Login Failure");
  }
});

app.listen(PORT, () => {
  console.log(`Backend Server Started\nUrl:http://localhost:${PORT}`);
  //console.log('Backend Server Started');
});
