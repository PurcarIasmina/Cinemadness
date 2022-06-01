import {Fragment, useState,useEffect} from 'react';
import { Link, Route } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
// import MovieItem from '../Movies/MovieItem';
import backgroundImage from '../../assets/backgroundImage.jpg';
import logo from '../../assets/logo.png';
import classes from './Header.module.css';
// import '../Movies/Movies.module.css';
// // import { useState,useEffect } from 'react';
 import axios from 'axios';
const Header = props => {
//     const [searchMovie, setSearchMovie] = useState("");
//     const[movieList,setMovieList]=useState([]);
//     useEffect( ()=>
//     {  getMovies();
        
        
//     },[]);
    
//     const getMovies = async (event) => {
//         if(event)
//         {
//             event.preventDefault();
//         }
//        await axios.post("http://localhost:3001/movies",{name:searchMovie}).then((response) => {
//            console.log(response.data);
//             setMovieList([...movieList,response.data]);
//             console.log(movieList);
//         });
//     };
    
//     const SearchMovies=(e)=>{
    
//    e.preventDefault();
//    getMovies();

        
//      }
//      const renderMovies=()=>
//      {  console.log("aici");
//         movieList.map( (val, key) => {
//             console.log("aici2");
//             <Link to={"/movie-details/" + val.id}>
//                 <MovieItem 
//                 key={val.id} 
//                 image={val.image} 
//                 name={val.name} 
//                 />
//             </Link>})
//      }
const navigator=useNavigate();
const [loginStatus, setLoginStatus] = useState("");
const [isLogged,setIsLogged]=useState(false);
const [isAdmin,setIsAdmin]=useState(false);
axios.defaults.withCredentials = true;
useEffect( ()=>
    {  getLoggedUser();
       
        
    },[]);

const getLoggedUser=async ()=>{await axios.get("http://localhost:3007/login").then((response) => {
      if (response.data.loggedIn == true) {
          console.log(response.data.loggedIn);
          setIsLogged(true);
          if(response.data.user[0].admin==1)
          setIsAdmin(true);
        setLoginStatus(response.data.user[0].lname);
      }
    });};
const Logout=()=>{axios.post("http://localhost:3007/logout").then((response) => {
    console.log("aici");
    if (response ){
          console.log("aici");
       navigator("/login");
      }
    });};
    return <Fragment>
        <header className={classes.header}>
            <Link to="/"><img className={classes.logo} src={logo} alt=""></img></Link>
            {/* <form onSubmit={SearchMovies}> */}
            <input className={classes['header-search']} type="text" placeholder="Search" /*onInput={(e)=> setSearchMovie(e.target.value)}*/ />
            {/* {searchMovie} */}
            {/* <button  type="submit"><i className="fa fa-search"></i></button> */}

            {/* </form> */}
            
            <select className={classes['days']}>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
            </select>
            {!{isLogged}}
        { !isLogged && <button className={classes['login-signup-buttons']}><a href="/login">Log In</a></button>}
        {  !isLogged &&  <button className={classes['login-signup-buttons']}><a href="/register">Sign Up</a></button>}
        { isLogged && !isAdmin && <h1>{loginStatus}</h1>}
        { isLogged && isAdmin && <button className={classes['login-signup-buttons']}><a href="/admin/add-new-movie">Add movie</a></button>}
        {  isLogged &&  <button onClick={()=>Logout()}className={classes['login-signup-buttons']}>Logout</button>}
        </header>
        <div className={classes['main-image']}>
           <img src={backgroundImage} alt=""></img> 
           {/* <div className='movie-container'>
          {renderMovies()};
            
        </div> */}
        </div>   
        
        
    </Fragment>
  
};

export default Header;