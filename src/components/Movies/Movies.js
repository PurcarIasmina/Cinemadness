import classes from './Movies.module.css';
import MovieItem from './MovieItem';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const Movies = () =>{
    const [movieList, setMovieList] = useState([]);
    useEffect( ()=>
    {  getMovies();
       
        
    },[]);
    const getMovies = async () => {
       await axios.get("http://localhost:3001/movies").then((response) => {
            setMovieList(response.data);
        });
    };

    

    return (
        <div className={classes['movie-container']}>
            {movieList.map( (val, key) => 
            <Link to={"/movie-details/" + val.id}>
                <MovieItem 
                key={val.id} 
                image={val.image} 
                name={val.name} 
                />
            </Link>
            )}
        </div>
    );
};

export default Movies;