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
                    res.status(200).send(req.body);
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
app.post('/verifyaccount',(req,res)=>{
const email=req.body.email;
const password=req.body.password;
console.log(req.body);
db.query("SELECT * FROM users WHERE email=?",[email],(err,result) =>
            {
                if(err)
                {
                    res.status(500).send(err);
                }
                var ok=0;
                var list=[];
                list.push(result);
                if(result.length>0)
                 {
                      console.log(email);
                    
                    for(var i=0;i<result.length;i++){
                        console.log(i);
                        console.log(result[i].password);
                            if(bcrypt.compare(password,result[i].password)==true){
                        console.log(password);
                        ok=1;
                        res.status(200).send(result[i]);
                        
                    
                    
                    }
                    console.log(ok);
                    
                }
                    if(ok==0)
                    {    console.log("Nu este");
                         res.status(300).send("Incorrect password");
                         
                    }
                 }
                else
                res.status(301).send("This user doesn't exist");

                
            });
       


});

app.listen(3007,()=>{
    console.log("yey");
});

