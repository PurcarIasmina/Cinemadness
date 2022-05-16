import { Route, Redirect } from 'react-router-dom';
import { Fragment } from 'react';

import Admin from './components/Users/Admin';
import UnloggedUser from './components/Users/UnloggedUser';
import MovieDetails from './components/Movies/MovieDetails';


function App() {
  return (
    <Fragment>
      <Route path="/" exact>
        <Redirect to="/unlogged-user"/>
      </Route>
      <Route path="/admin">
        <Admin />
      </Route>
      <Route path="/unlogged-user">
        <UnloggedUser />
      </Route>
      <Route path='/movie-details/:movieId'>
        <MovieDetails />
      </Route>
    </Fragment>
  );
}

export default App;