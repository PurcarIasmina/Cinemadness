import { Fragment } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Register from './components/Layout/Register';
import Login from './components/Layout/Login';
import LoggedUser from './components/Layout/LoggedUser';
function App() {
  return (
    
      <Router>
        <Routes>
        <Route path="" element={<Header/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/loggeduser" element={<LoggedUser/>}/>
        </Routes>
      </Router>
    
  );
}

export default App;