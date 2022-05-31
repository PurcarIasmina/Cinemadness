import {Fragment} from 'react';
import { Link, Route } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

// import MovieItem from '../Movies/MovieItem';
import backgroundImage from '../../assets/backgroundImage.jpg';
import logo from '../../assets/logo.png';
import classes from './Header.module.css';
// import '../Movies/Movies.module.css';
// // import { useState,useEffect } from 'react';
// import axios from 'axios';
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
            <button className={classes['login-signup-buttons']}><a href="/login">Log In</a></button>
            <button className={classes['login-signup-buttons']}><a href="/register">Sign Up</a></button>
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