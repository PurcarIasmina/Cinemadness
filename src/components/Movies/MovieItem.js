import classes from './MovieItem.module.css';
import { Fragment } from 'react';

const MovieItem = (props) => {
    return <Fragment>
                <section className={classes.movie}>
                    <img src={props.image} alt={props.name} />
                    <div className={classes['movie-info']}>
                        <h3>{props.name}</h3>
                        <span>{props.rating}</span>
                    </div>
                </section>
            </Fragment>
}

export default MovieItem;