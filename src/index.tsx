import React from 'react';
import './index.css';
import {State} from "./Redux/State";
import {rerenderEntireTree} from "./render";


rerenderEntireTree(State);