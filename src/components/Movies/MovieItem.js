import classes from './MovieItem.module.css';

const MovieItem = (props) => {
    return <div className={classes.movie}>
        <img src={props.image} alt={props.name} />
        <div className={classes['movie-info']}>
            <h3>{props.name}</h3>
            <span>{props.rating}</span>
        </div>
    </div>
}

export default MovieItem;