 import { Route, Redirect } from 'react-router-dom';
import { Switch } from 'react-router-dom';

import Admin from './components/Users/Admin';
import UnloggedUser from './components/Users/UnloggedUser';
import MovieDetails from './components/Movies/MovieDetails';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import AddNewMovie from './components/Movies/AddNewMovie';
import Register from './components/Layout/Register';
import Login from './components/Layout/Login';
import LoggedUser from './components/Layout/LoggedUser';

function App() {
  return (
      <Switch>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
        <Route path="/loggeduser" exact>
          <LoggedUser />
        </Route>
        <Route path="/" exact>
          <Redirect to="/unlogged-user"/>
        </Route>
        <Route path="/admin" exact>
          <Admin />
        </Route>
        <Route path="/admin/add-new-movie" exact>
          <AddNewMovie />
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