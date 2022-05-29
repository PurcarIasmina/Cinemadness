import {Fragment} from 'react';
import { Link } from 'react-router-dom';



import backgroundImage from '../../assets/backgroundImage.jpg';
import logo from '../../assets/logo.png';
import classes from './Header.module.css';
const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <Link to="/"><img className={classes.logo} src={logo} alt=""></img></Link>
            <input className={classes['header-search']} type="text" placeholder="Search"/>
            <select className={classes['days']}>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
            </select>
            <button className={classes['login-signup-buttons']}>Log In</button>
            <button className={classes['login-signup-buttons']}>Sign Up</button>
        </header>
        <div className={classes['main-image']}>
           <img src={backgroundImage} alt=""></img> 
        </div>    
    </Fragment>
};

export default Header;