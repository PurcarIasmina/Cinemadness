import { Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Admin from './components/Users/Admin';
import UnloggedUser from './components/Users/UnloggedUser';
import MovieDetails from './components/Movies/MovieDetails';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';


function App() {
  return (
      <Switch>
        <Route path="/" exact>
          <Redirect to="/unlogged-user"/>
        </Route>
        <Route path="/admin" exact>
          <Admin />
        </Route>
        <Route path="/unlogged-user" exact>
          <UnloggedUser />
        </Route>
        <Route path='/movie-details/:movieId' exact>
          <MovieDetails />
        </Route>
        <Route path='*'>
          <NotFoundPage />
        </Route>
      </Switch>
  );
}

export default App;