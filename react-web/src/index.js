import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import axios from 'axios';

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.headers.common['Authorization'] = 'AUTH_TOKEN';


axios.interceptors.request.use( request => {
    console.log(request);
    return request;
});

ReactDOM.render( <App />, document.getElementById( 'root' ) );
registerServiceWorker();
