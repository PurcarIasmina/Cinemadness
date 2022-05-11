const { Axios } = require("axios");
const express= require("express");
const app = express();
const mysql=require("mysql");
const cors=require("cors");
app.use(cors());
app.use(express.json());
const db=mysql.createConnection({
    user: "root",
    host: "localhost",
    password:"password",
    database:"Cinemadness",
});
app.post('/create', (req,res)=>{
console.log(req.body);
const fname=req.body.fname;
const lname=req.body.lname;
const email=req.body.email;
const password=req.body.password;
const cpassword=req.body.cpassword;

db.query("INSERT INTO users (fname,lname,email,password) VALUES (?,?,?,?)",[fname,lname,email,password],(err,result)=>
{
    if(err)
    {
        console.log(err);
    }
    else{
        res.send("Values inserted");
    }
});
});
app.listen(3001,()=>{
    console.log("yey");
});