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
  const genres = req.body.genres;
  const trailer = req.body.trailer;

  db.query(
    "INSERT INTO movies (name, description, price, length, image, day, genres, trailer) VALUES (?,?,?,?,?,?,?,?)",
    [name, description, price, length, image, day, genres, trailer],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values Inserted");
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

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});