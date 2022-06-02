const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const { FaCreativeCommonsPd } = require("react-icons/fa");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "password",
  database: "cinemadness",
});
// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header(
//     "Access-Control-Allow-Headers",
//     "Origin, X-Requested-With, Content-Type, Accept"
//   );
//   next();
// });
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
        console.log(result.insertId);
        
        db.query( "INSERT INTO rating (id_movie,counter, average) VALUES (?,?,?)",[result.insertId,0,0],(errt,resultt)=>
        {
          if(errt)
          {
            console.log(resultt);
          }
          else
          {
            res.status(200).send((result.insertId).toString());
          }
          
        })
        
      }
    }
  );
});

app.get("/movies", (req, res) => {
  // const name=req.body.name;
  // console.log(name);
  // if(name=="")
  // {
  //   db.query("SELECT * FROM movies",(err, result) => {
  //     if (err) {
  //         console.log(err);
  //       } else {
        
  //         res.send(result);
  //       }
  // })
  // }else{
    db.query("SELECT * FROM movies",(err, result) => {
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
app.post("/updateMovieRating", (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  const id=req.body.id;
  const rating=req.body.rating;
  console.log(id);
  db.query("SELECT * FROM rating WHERE id_movie=?",[id],(err, ress) => {
  console.log(ress[0]);
  const counter=ress[0].counter+1;
  console.log(counter);
  const average=(ress[0].average*(counter-1)+rating)/counter;
  console.log(average);
  db.query("UPDATE rating SET counter=?,average=? WHERE id_movie=?",[counter,average,id],(err, result) => {
      if (err) {
        res.status(400).send(err);
          console.log(err);
        } else {
          
          console.log(result);
          res.status(200).send(average.toString());}
          
        
      })
  })

})
app.post("/getMovieRating", (req, res) => {
  console.log(req.body);
  console.log(req.body.id);
  const id=req.body.id;
  console.log(id);
  db.query("SELECT * FROM rating WHERE id_movie=?",[id],(err, result) => {
  
  
      if (err) {
        res.status(400).send(err);
          console.log(err);
        } else {
          
          console.log(result[0]);
          res.status(201).send((result[0].average).toString());}
        
        
})
  

})
app.post("/getMoviesRating", (req, res) => {
  
  
  db.query("SELECT * FROM movies",(err, result) => {
  
  
      if (err) {
        res.status(400).send(err);
          console.log(err);
        } else {
          var list=[];
          for(var i=0;i<result.length;i++){
            console.log(result.length);
            console.log(result[i].id);
            var object=[result[i].id,result[i].name,result[i].image];
            console.log(object);
          db.query("SELECT * FROM rating WHERE id_movie=?",[result[i].id],(errr, resultt) => {
         
            if(errr)
            { console.log("aici");
              console.log(err);
            }
            else
            { object.push(resultt[0].average);
              //console.log(object);
              list.push(object);
              object=[];
            }
            console.log(list);
          })
        
          }
          console.log(list);
          res.status(201).send(list);
        }
        
        
})

  

})
app.post("/addFave", (req, res) => {
  console.log(req.body);
  
  const id_user=req.body.id_user;
  const id_movie=req.body.id_movie;
  db.query("INSERT INTO favourites (id_movie,id_user)  VALUES (?,?)",[id_movie,id_user],(err, result) => {
  
  
      if (err) {
        res.status(400).send(err);
          console.log(err);
        } else {
          
          console.log(result);
          res.status(201).send(result);}
        
        
})
})

app.listen(3001, () => {
  console.log("Yey, your server is running on port 3001");
});