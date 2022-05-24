import classes from "./NewMovieForm.module.css"
import camera from '../../assets/camera.png';

const NewMovieForm = () => {
    return (
        <div className={classes.form}>
            <input type="text" placeholder="Movie name" />
            <textarea placeholder="Description"></textarea>
    
            <div className={classes["movie-info"]}>
                <div className={classes["movie-image"]}><p className="text">Movie image</p></div>
                <div className={classes["upload-image-sec"]}>
                    <p className={classes["text"]}><img src={camera} alt=""/>Upload image</p>
                    <input type="file" className={classes["upload-image"]}/>
                </div>
            </div>

            <input type="number" placeholder="Selling price"/>

            <input type="number" placeholder="Movie length"/>
        
            <div className={classes["buttons"]}>
                <button className={classes["btn"]}>Add movie</button>
            </div>
        </div>
    );
};

export default NewMovieForm;
