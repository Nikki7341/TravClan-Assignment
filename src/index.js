import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from "axios";


axios.defaults.baseURL = 'https://intense-tor-76305.herokuapp.com';
ReactDOM.render(
    <App />,
  document.getElementById('root')
);

