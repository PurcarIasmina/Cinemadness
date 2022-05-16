import { Fragment } from 'react';

import Header from '../Layout/Header';
import Movies from '../Movies/Movies';
import Footer from '../Layout/Footer';

const UnloggedUser = () => {
    return (
        <Fragment>
            <Header />
            <Movies />
            <Footer />  
        </Fragment>
    );
}

export default UnloggedUser;