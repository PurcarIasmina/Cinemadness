import classes from "./NewMovieForm.module.css"
import camera from '../../assets/camera.png';
import { useState } from "react";
import Axios from "axios";
import {Navigate, useNavigate,Link} from 'react-router-dom';
const NewMovieForm = () => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [imageBase64, setImageBase64] = useState("");
    const [price, setPrice] = useState(0);
    const [length, setLength] = useState(0);
    const [day, setDay] = useState("");
    const navigate=useNavigate();
    const [genres, setGenres] = useState("");
    const [trailer, setTrailer] = useState("");

    const addMovie = () => {
        Axios.post("http://localhost:3001/createMovie", {
          name: name,
          description: description,
          price: price,
          length: length,
          image: imageBase64.default,
          day: day,
        }).then((result) => {
            if(result.status===200)
            {  console.log(result.data);
                navigate("/movie-details/" + result.data);
            }
        });
    };

    return (
        <div className={classes.form}>
            <input type="text" onChange={(event) => {setName(event.target.value)}}  placeholder="Movie name" />
            <textarea onChange={(event) => {setDescription(event.target.value)}}  placeholder="Description"></textarea>
    
            <div className={classes["movie-info"]}>
                <div className={classes["upload-image-sec"]}>
                    <p className={classes["text"]}><img src={camera} alt=""/>Upload image</p>
                    <input type="file" onChange={(event) => {setImageBase64(require('../../assets/' + event.target.files[0].name))}}  className={classes["upload-image"]}/>
                </div>
            </div>

            <input type="text" onChange={(event) => {setTrailer(event.target.value)}}  placeholder="Movie trailer" />
            <input type="text" onChange={(event) => {setGenres(event.target.value)}}  placeholder="Movie genres" />
            <input type="number" onChange={(event) => {setPrice(event.target.value)}}  placeholder="Selling price"/>
            <input type="number" onChange={(event) => {setLength(event.target.value)}}  placeholder="Movie length"/>
            <input type="text" onChange={(event) => {setDay(event.target.value)}}  placeholder="Movie day" />

            <div className={classes["buttons"]}>
                <button className={classes["btn"]} onClick={addMovie}>Add movie</button>
            </div>
        </div>
    );
};

export default NewMovieForm;
