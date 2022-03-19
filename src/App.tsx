import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Navbar} from "./components/Navbar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {News} from "./components/News/News";
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";

let ProfilePage = () => <Profile/>
let DialogsPage = () => <Dialogs/>
let NewsPage = () => <News/>
let MusicPage = () => <Music/>
let SettingsPage = () => <Settings/>

const App = () => {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <Navbar/>
                <div className='wrapper_content'>
                    <Route path='/profile' render={ProfilePage}/>
                    <Route path='/dialogs' render={DialogsPage}/>
                    <Route path='/news' render={NewsPage}/>
                    <Route path='/music' render={MusicPage}/>
                    <Route path='/settings' render={SettingsPage}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
