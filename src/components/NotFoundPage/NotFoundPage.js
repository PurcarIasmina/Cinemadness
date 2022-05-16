import { Fragment } from "react/cjs/react.production.min"
import { Link } from "react-router-dom";

import classes from "./NotFoundPage.module.css"
import img404 from '../../assets/404.png';

const NotFoundPage = () => {
    return (
        <Fragment>
            <img src={img404} className={classes["four-0-four-image"]} alt=""></img>
            <p className={classes["four-0-four-msg"]}>Looks like you are lost. Head back to our <Link to="/">HOMEPAGE!</Link></p>
        </Fragment>
    );
};

export default NotFoundPage;