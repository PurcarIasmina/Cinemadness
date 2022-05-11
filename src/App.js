import { Fragment } from 'react';
import Header from './components/Layout/Header';
import Movies from './components/Movies/Movies';
import Footer from './components/Layout/Footer';
function App() {
  return (
    <Fragment>
      <Header />
      <Movies />
      <Footer />
    </Fragment>
  );
}

export default App;