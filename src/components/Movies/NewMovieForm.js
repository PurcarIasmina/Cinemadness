import classes from "./NewMovieForm.module.css"
import camera from '../../assets/camera.png';
import { useState } from "react";
import Axios from "axios";
import {Navigate, useNavigate,Link} from 'react-router-dom';
const NewMovieForm = () => {

    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [price, setPrice] = useState(0);
    const [length, setLength] = useState(0);
    const [day, setDay] = useState("");
    const navigate=useNavigate();
    const addMovie = () => {
        Axios.post("http://localhost:3001/createMovie", {
          name: name,
          description: description,
          price: price,
          length: length,
          image: image,
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
                <div className={classes["movie-image"]}><p className="text">Movie image</p></div>
                <div className={classes["upload-image-sec"]}>
                    <p className={classes["text"]}><img src={camera} alt=""/>Upload image</p>
                    <input type="file" onChange={(event) => {setImage(event.target.value)}}  className={classes["upload-image"]}/>
                </div>
            </div>

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
