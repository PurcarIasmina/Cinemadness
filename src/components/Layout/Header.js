import {Fragment} from 'react';

import backgroundImage from '../../assets/backgroundImage.jpg';
import logo from '../../assets/logo.png';
import classes from './Header.module.css';
const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <img className={classes.logo} src={logo} alt=""></img>
            <input className={classes['header-search']} type="text" placeholder="Search"/>
            <select>
                <option value="Monday">Monday</option>
                <option value="Tuesday">Tuesday</option>
                <option value="Wednesday">Wednesday</option>
                <option value="Thursday">Thursday</option>
                <option value="Friday">Friday</option>
                <option value="Saturday">Saturday</option>
                <option value="Sunday">Sunday</option>
            </select>
            <button>LogIn</button>
            <button>SignUp</button>
        </header>
        <div className={classes['main-image']}>
           <img src={backgroundImage} alt=""></img> 
        </div>    
    </Fragment>
};

export default Header;