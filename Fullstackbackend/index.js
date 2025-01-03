var express = require("express");
var path = require("path");
var mdb = require("mongoose");
var User = require("./models/users");
var app = express();
const PORT = 3001;
app.use(express.json())
mdb
  .connect("mongodb://localhost:27017")
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
app.post("/signup", (req, res) => {
  console.log(req.body);
  var { firstName, lastName, email } = req.body;
  console.log(firstName, lastName, email);
  //res.send("hello")
  try {
    var newUser = new User({
      firstName: firstName,
      lastName: lastName,
      email: email,
    });
    newUser.save();
    console.log("User Added Successfully");
    res.status(200).send("User Added Successfully");
  } catch (err) {
    console.log(err);
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
app.get('/getsignup',async(req,res)=>{
    try{
        var allSignUpRecords=await User.find()
        res.json(allSignUpRecords)
        console.log("All Data fetched");
    }
    catch(err){
        console.log(err);
        res.send(err)
        //console.log("Cannot able to read the Records");
    }
})

app.listen(PORT, () => {
  console.log(`Backend Server Started\nUrl:http://localhost:${PORT}`);
  //console.log('Backend Server Started');
});
