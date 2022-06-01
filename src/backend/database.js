const { axios } = require("axios");
const express= require("express");
const app = express();
const mysql=require("mysql");
const cors=require("cors");
const bcrypt = require("bcryptjs");
const { object } = require("yup");
const session=require("express-session");
const  cookieParser  = require("cookie-parser");
const bodyParser=require("body-parser");
app.use(cors(
    {
        origin:["http://localhost:3000"],
        methods:["POST","GET"],
        credentials:true

    }
));
app.use(express.json());

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use((req, res, next) => {
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.header(
//       "Access-Control-Allow-Headers",
//       "Origin, X-Requested-With, Content-Type, Accept"
//     );
//     next();
//   });
  
app.use(
  session({
    key: "userId",
    secret: "register",
    resave: false,
    saveUninitialized: false,
    
  })
);
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
db.query("SELECT * FROM users WHERE email=? AND password=?",[email,password],function(err,result)
            
{          
           if(result!==null && result!==undefined)
           {   
               if(result.length>0){
                req.session.user=result;
                console.log(req.session.user);
                res.status(200).send(email);
               }
               else
                res.status(300).send("Invalid credentials");
           }
           else
                res.status(301).send("Connection lost");
}
);
        });
                    
                    
app.get("/login", (req, res) => {
if (req.session.user) {
res.send({ loggedIn: true, user: req.session.user });
} else {
res.send({ loggedIn: false });
            }
          });                
 app.post ("/logout",(req,res)=>
 {  req.session.destroy((err)=>
    {
        if(err)
        throw er;
    });
    res.send("Session destroyed");

 })                 

app.listen(3007,()=>{
    console.log("yey");
});

