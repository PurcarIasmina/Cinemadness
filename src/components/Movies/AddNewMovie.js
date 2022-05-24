import { Fragment } from 'react';

import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import NewMovieForm from './NewMovieForm';

const AddNewMovie = () => {
    return (
        <Fragment>
            <Header></Header>
            <NewMovieForm/>
            <Footer></Footer>
        </Fragment>
    );
}

export default AddNewMovie;