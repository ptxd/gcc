import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';
import 'normalize-css';
import './scss/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>    
        <App />
    </Router>, 
document.getElementById('root'));

registerServiceWorker();

