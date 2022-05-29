import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
<<<<<<< HEAD

root.render(<App />);
=======
root.render(
<BrowserRouter>
    <App />
</BrowserRouter>
);
>>>>>>> b332fdde145eb0417ba44fbe55b6d52fb604a654
