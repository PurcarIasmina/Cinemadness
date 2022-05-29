import classes from './Footer.module.css';
import logo from '../../assets/logo.png';
import {Fragment} from 'react';

const Footer = () =>{
    return <Fragment>
        <footer className={classes.footer}>
            <div className={classes['footer-content']}>
                <img className={classes.logo} src={logo} alt="" />
                <div className={classes['footer-container']}>
                    <ul className={classes['contact-us']}>
                        <li className={classes['contact-us-title']}>Contact Us</li>
                        <li>PHONE</li>
                        <li className={classes['contact-us-number']}>0763 850 488/0733 959 475</li>
                        <li>EMAIL</li>
                        <li className={classes['contact-us-email']}>robertpavaloni662000@yahoo.com/purcar.iasminamaria@yahoo.com</li>
                    </ul>
                </div>
            </div>
            <p className={classes.copyright}>Cinemadness © 2022. All Rights Reserved</p>
        </footer>
        </Fragment>
}

export default Footer;