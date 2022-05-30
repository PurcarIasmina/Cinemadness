import { useParams } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";


const MovieDetails = () => {
    const params = useParams();
    
    const [movieDetails, setMovieDetails] = useState([]);
    useEffect( ()=>
    {  MMovieDetails();
        
        
    },[]);
    
    const MMovieDetails=async ()=>{
    
   
        await axios.post("http://localhost:3001/selectedMovie",{id:params.movieId},{
       
           headers: {
   
               'Content-Type' : 'application/json'
   
           }
   
       }).then((result)=>{
           
           if(result.status===200){
           console.log(result.data);
           setMovieDetails([...movieDetails,result.data]);
           //console.log(movieDetails);
        }}).catch(err=>{
               console.log(err.response);
           
       });
    
     }
     

     
     return (
        <div>
            {movieDetails?.map( (val, key) => {
                
                
                return (<h1>name={val.name} </h1>);}
        
          
            )}
            </div>
    );
    
         
    
};

export default MovieDetails;