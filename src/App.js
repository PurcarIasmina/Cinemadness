 import { Route, Navigate } from 'react-router-dom';
import { Routes } from 'react-router-dom';

import Admin from './components/Users/Admin';
import UnloggedUser from './components/Users/UnloggedUser';
import MovieDetails from './components/Movies/MovieDetails';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import AddNewMovie from './components/Movies/AddNewMovie';
import Register from './components/Layout/Register';
import Login from './components/Layout/Login';
import LoggedUser from './components/Layout/LoggedUser';
import Favourites from './components/Movies/Favourites'
function App() {
  return (
      <Routes>
        <Route path="/register" element={<Register />}>
        </Route>
        <Route path="/login" element={<Login />}>
    
        </Route>
        <Route path="/loggeduser" element={<LoggedUser />}>
          
        </Route>
        <Route path="/" element={<UnloggedUser/>}>
          
        </Route>
        <Route path="/admin" element={<Admin />}>
          
        </Route>
        <Route path="/admin/add-new-movie" element={<AddNewMovie />}>
     
        </Route>
        <Route path="/unlogged-user" element={<UnloggedUser />}>
         
        </Route>
        <Route path='/movie-details/:movieId' element={<MovieDetails/>}></Route>
        <Route path='/favourites' element={<Favourites/>}>
        </Route>
        <Route path='*' element={<NotFoundPage />}>
         
        </Route>
        
      </Routes>
  );
}

export default App;