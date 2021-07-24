import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import Layout from '../src/Components/Layout'
import './assets/boxicons-2.0.7/css/boxicons.min.css'
import './scss/index.scss'
ReactDOM.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
