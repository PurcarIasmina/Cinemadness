import classes from './MovieItem.module.css';
import { Fragment, useEffect,useState } from 'react';
import axios from "axios";
const MovieItem = (props) => {
   
    return <Fragment>
                <section className={classes.movie}>
                    <img src={props.image} alt={props.name} />
                    <div className={classes['movie-info']}>
                        <h3>{props.name}</h3>
                    
                    </div>
                </section>
            </Fragment>
}

export default MovieItem;