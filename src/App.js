import { Fragment } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Register from './components/Layout/Register';

function App() {
  return (
    
      <Router>
        <Routes>
        <Route path="/" element={<Header/>}/>
        <Route path="/register" element={<Register/>}/>
        </Routes>
      </Router>
    
  );
}

export default App;