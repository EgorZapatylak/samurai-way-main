import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, RootStateType} from "./Redux/State";
import {BrowserRouter} from "react-router-dom";


export const rerenderEntireTree = (State: RootStateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={State} addPost={addPost}/>
        </BrowserRouter>, document.getElementById('root'));
};