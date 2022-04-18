import React from 'react';
import './index.css';
import {subscribe} from "./Redux/State";
import {rerenderTree} from "./render";


rerenderTree()
subscribe(rerenderTree);