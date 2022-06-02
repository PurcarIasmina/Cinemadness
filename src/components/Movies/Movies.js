import classes from './Movies.module.css';
import MovieItem from './MovieItem';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import axios from "axios";

const Movies = () =>{
    const [movieList, setMovieList] = useState([]);
    const [currentId, setCurrentId]= useState(0);
   
    useEffect( ()=>
    {  getMovies();
    //    getMovieRatingg(currentId);
     
    },[]);
    const getMovies = async () => {
       await axios.get("http://localhost:3001/movies").then((response) => {
            setMovieList(response.data);
        });
    };

  const [currentRating,setCurrentRating]=useState(0); 
//   const getMovieRatingg= async (id) =>{
//    await axios.post("http://localhost:3001/getMovieRating",{id:id},{
       
//            headers: {
   
//                'Content-Type' : 'application/json'
   
//            }
   
    //    }).then((result)=>{
           
    //        if(result.status===201){
    //        console.log(result.data);
    //        setCurrentRating(result.data);
           
    //     }}).catch(err=>{
    //            console.log(err.response);
           
    //    });
    // }

    return (
        <div className={classes['movie-container']}>
            {movieList.map( (val, key)  => {
            
           
        
         
            return(
            <Link to={"/movie-details/" + val.id}>
                
                <MovieItem
                key={val.id} 
                image={val.image} 
                name={val.name} 

                />
            </Link>
        
            )})}
        </div>
    );
};

export default Movies;