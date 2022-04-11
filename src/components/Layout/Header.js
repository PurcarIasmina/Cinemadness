import {Fragment} from 'react';

import backgroundImage from '../../assets/backgroundImage.jpg';
import classes from './Header.module.css';
const Header = props => {
    return <Fragment>
        <header className={classes.header}>
            <h1>Logo</h1>
            <h1>SearchBar</h1>
            <button>LogIn</button>
            <button>SignUp</button>
        </header>
        <div className={classes['main-image']}>
           <img src={backgroundImage} alt=""></img> 
        </div>    
    </Fragment>
};

export default Header;