const { Axios } = require("axios");
const express= require("express");
const app = express();
const mysql=require("mysql");
const cors=require("cors");
const bcrypt = require("bcryptjs");
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
if(password==cpassword){
try{
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, function(err, hash) {
            console.log(hash);
            db.query("INSERT INTO users (fname,lname,email,password) VALUES (?,?,?,?)",[fname,lname,email,hash],(err,result) =>
            {
                if(err)
                {
                    console.log(err);
                    
                }
                else
                {
                    console.log("all inserted");
                }
            });
        });
    });

    res.send("User was created");
 
}catch(err)
{
    console.log(err);
}
}
});
app.post('/login',(req,res)=>{
const email=req.body.email;
const password=req.body.password;
db.query("SELECT * FROM users WHERE email=?",[email],(err,result) =>
            {
                if(err)
                {
                    throw(err);
                }
                
                if(result.length>0)
                    {
                      console.log(result[0].email);

                    if(bcrypt.compare(password,result[0].password)){
                        //console.log(password);
                        res.redirect("/loggeduser");
                    
                    }
                    else
                    {
                        res.redirect("/login");
                    }
                }

                
            });
       


});

app.listen(3003,()=>{
    console.log("yey");
});

