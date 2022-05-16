import classes from './Movies.module.css';
import MovieItem from './MovieItem';
import { Link } from 'react-router-dom';


import batman from '../../assets/batman.jpg';
import ted from '../../assets/ted.png';
import xmen from '../../assets/xmen.jpg';
import thenun from '../../assets/thenun.jpg';
import pokemon from '../../assets/pokemon.jpg';

const DUMMY_MOVIES = [
    {
        id: "movie1",
        image: pokemon,
        name: "Pokemon",
        rating: 5.6, 
    },
    {
        id: "movie2",
        image: batman,
        name: "Batman",
        rating: 3, 
    },
    {
        id: "movie3",
        image: thenun,
        name: "The Nun",
        rating: 8.9, 
    },
    {
        id: "movie4",
        image: xmen,
        name: "X-Men",
        rating: 9.1, 
    },
    {
        id: "movie5",
        image: ted,
        name: "Ted",
        rating: 7, 
    },
    {
        id: "movie5",
        image: ted,
        name: "Ted",
        rating: 7, 
    },
];

const Movies = () =>{
    return (
        <div className={classes['movie-container']}>
            {DUMMY_MOVIES.map( (movie) => 
            <Link to={"/movie-details/" + movie.name}>
                <MovieItem 
                key={movie.id} 
                image={movie.image} 
                name={movie.name} 
                rating={movie.rating}
                />
            </Link>
            )}
        </div>
    );
};

export default Movies;