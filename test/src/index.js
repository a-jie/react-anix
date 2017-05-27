import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import '../css/normalize.css';
import '../css/styles.css';


ReactDOM.render((
    <div className="container">
        <div className="row">
            <App/>
        </div>
    </div>
), document.getElementById('root'));