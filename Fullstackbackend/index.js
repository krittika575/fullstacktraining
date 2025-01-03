var express =require('express')
var app=express()
const PORT =3001
app.get('/',(req,res)=>{
    res.json({server:"Welcome to Backend",url:"localhost",port:"PORT"})
    //res.send("Welcome to Backend Server")  //first response will be display
  //res.json("Welcome to Backend Server")
})
app.get('/static',(req,res)=>{
    res.sendFile('')
})

app.listen(PORT,()=>{
    console.log(`Backend Server Started\nUrl:http://localhost:${PORT}`);
    //console.log('Backend Server Started');

})
