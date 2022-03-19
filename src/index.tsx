import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {State} from "./Redux/State";

ReactDOM.render(
    <App state={State}/>,
    document.getElementById('root')
);