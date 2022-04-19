import { Fragment } from 'react';
import Header from './components/Layout/Header';
import Movies from './components/Movies/Movies';
function App() {
  return (
    <Fragment>
      <Header />
      <main>
        <Movies />
      </main>
    </Fragment>
  );
}

export default App;