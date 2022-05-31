import classes from './Movies.module.css';
import MovieItem from './MovieItem';
import { Link } from 'react-router-dom';
import { useState } from "react";
import Axios from "axios";

const Movies = () =>{
    const [movieList, setMovieList] = useState([]);
 
    const getMovies = () => {
        Axios.get("http://localhost:3001/movies").then((response) => {
            setMovieList(response.data);
        });
    };

    getMovies();

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