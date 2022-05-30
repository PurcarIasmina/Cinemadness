const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "cinemadness",
});

app.post("/createMovie", (req, res) => {
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  const length = req.body.length;
  const image = req.body.image;
  const day = req.body.day;

  db.query(
    "INSERT INTO movies (name, description, price, length, image, day) VALUES (?,?,?,?,?,?)",
    [name, description, price, length, image, day],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
      
        console.log(result.insertId);
        res.status(200).send((result.insertId).toString());
      }
    }
  );
});

app.get("/movies", (req, res) => {
    db.query("SELECT * FROM movies", (err, result) => {
        if (err) {
            console.log(err);
          } else {
            res.send(result);
          }
    })
})
app.post("/selectedMovie", (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  const id=req.body.id;
  console.log(id);
  db.query("SELECT * FROM movies WHERE id=?",[id],(err, result) => {
      if (err) {
        res.status(400).send(err);
          console.log(err);
        } else {
          if(result.length>0){
          console.log(result[0]);
          res.status(200).send(result[0]);}
          
        
        else
        {
          res.status(401).send("Movie not found!");
        }
      }
  })
})

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});