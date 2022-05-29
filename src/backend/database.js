const { axios } = require("axios");
const express= require("express");
const app = express();
const mysql=require("mysql");
const cors=require("cors");
const bcrypt = require("bcryptjs");
const { object } = require("yup");
app.use(cors());
app.use(express.json());


const db=mysql.createConnection({
    user: "root",
    host: "localhost",
    port: 3306,
    password:"password",
    database:"cinemadness",
});
db.connect((err)=>{
    if(err)
    {
        console.log(err);
    }
    console.log("Mysql connected");

});

app.post('/create', async(req,res)=>{
const fname=req.body.fname;
const lname=req.body.lname;
const email=req.body.email;
const password=req.body.password;
const cpassword=req.body.cpassword;
if(lname!="" && fname)
if(password==cpassword){
try{
    
            db.query("INSERT INTO users (fname,lname,email,password) VALUES (?,?,?,?)",[fname,lname,email,password],(err,result) =>
            {   console.log(err,result);
                if(err!==null)
                {
                    if(err.errno===1062)
                        res.status(300).send("Email already used");
                    else
                        res.status(301).send("Other error");
                }
                else
                {
                    res.status(200).send(req.body.email);
                }
            });
}
    

 
catch(err)
{
    console.log(err);
}
}
});
app.post('/verifyaccount',(req,res)=>{
const email=req.body.email;
const password=req.body.password;
console.log(req.body);
db.query("SELECT * FROM users WHERE email=?",[email],function(err,result)
            
{          
           if(result!==null && result!==undefined)
           {   
               if(result.length>0)
                res.status(200).send(email);
               else
                res.status(300).send("Invalid credentials");
           }
           else
                res.status(301).send("Connection lost");
}
);
        });
                    
                    
                    
                           

app.listen(3007,()=>{
    console.log("yey");
});

