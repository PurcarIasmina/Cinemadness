import { useParams } from "react-router-dom";
import axios from "axios";
import { useState,useEffect } from "react";
import {StyledButtonWLink, StyledButtonWLinkR, StyledContainer} from '../Layout/Style'
import './MovieDetails.css'
import ReactPlayer from "react-player";
import { FaStar } from "react-icons/fa";
const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300
    },
    button: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 300,
      padding: 10,
    }
  
  };
  
const colors = {
    orange: "#FFBA5A",
    grey: "#a9a9a9"
    
};
const MovieDetails = () => {
    const params = useParams();
    const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const stars = Array(5).fill(0)
    const [movieDetails, setMovieDetails] = useState([]);
    const [isClick, setClick] = useState(false);
    const [loginStatus, setLoginStatus] = useState("");
    axios.defaults.withCredentials = true;
    useEffect( ()=>
    {  MMovieDetails();
       getLoggedUser();
        
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
       await axios.post("http://localhost:3001/getMovieRating",{id:params.movieId},{
       
           headers: {
   
               'Content-Type' : 'application/json'
   
           }
   
       }).then((result)=>{
           
           if(result.status===201){
           console.log(result.data);
           setCurrentValue(result.data);
           //console.log(movieDetails);
        }}).catch(err=>{
               console.log(err.response);
           
       });
    
     }
     const getLoggedUser=async ()=>{await axios.get("http://localhost:3007/login").then((response) => {
      if (response.data.loggedIn == true) {
          console.log(response.data.loggedIn);
          
         
        setLoginStatus(response.data.user[0].id);
      }
    });};
     const Addfave= ()=>{
         axios.post("http://localhost:3001/addFave",{id_user:loginStatus,id_movie:params.movieId,},{
       
            headers: {
    
                'Content-Type' : 'application/json'
    
            }
    
        }).then((result)=>{
            
            if(result.status===201){
            console.log(result.data);
            
            //console.log(movieDetails);
         }}).catch(err=>{
                console.log(err.response);
            
        });
     
     }
     const handleClick = value => {
        setCurrentValue(value)
      }
    
      const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
      };
    
      const handleMouseLeave = () => {
        setHoverValue(undefined)
      }
     const submitRating= async () =>
     {
        await axios.post("http://localhost:3001/updateMovieRating",{id:params.movieId,rating:currentValue},{
       
            headers: {
    
                'Content-Type' : 'application/json'
    
            }
    
        }).then((result)=>{
            
            if(result.status===200){
            console.log(result.data);
            setCurrentValue(result.data);
            //console.log(movieDetails);
         }}).catch(err=>{
                console.log(err.response);
            
        });
        
     }
     
     return (
        <StyledContainer>
            {movieDetails?.map( (val, key) => {
                
                
                return (
                <div className="details">
                    <div className="big-img">
                        <img src={val.image} alt=""/>
                    </div>
                    
                    <div className="box">
                        <div className="row">
                            <div class="player">
                             <ReactPlayer url="https://www.youtube.com/watch?v=pzD9zGcUNrw"/>
                             </div>
                        </div>
              
                       <p>{val.description}</p>
           

                     
                        <div style={styles.stars}>
                        {stars.map((_, index) => {
                        return (
                        <FaStar
                          key={index}
                          size={24}
                          onClick={() => handleClick(index + 1)}
                          onMouseOver={() => handleMouseOver(index + 1)}
                          onMouseLeave={handleMouseLeave}
                          color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                          style={{
                         marginRight: 10,
                        cursor: "pointer"
              }}
            />
           
          )
         
        })}
         <StyledButtonWLinkR onClick={()=>submitRating()}>Rate</StyledButtonWLinkR>

      </div>
      <StyledButtonWLink>Buy ticket</StyledButtonWLink>
      <StyledButtonWLink onClick={()=>Addfave()}>Add to favourites</StyledButtonWLink>

                    </div>
                </div>)
                ;}
        
          
            )}
            </StyledContainer>
    );
    
         
    
};

export default MovieDetails;