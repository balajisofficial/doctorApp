import * as React from 'react';
import "./topbar.css"
import {Language, NotificationsNone, Settings} from '@material-ui/icons';
import Home from './pages/home/Home';

export default () => (
    <div className="topbar">
    <div className="topbarWrapper">
        <div className="topleft">
            <span className="logo">
                Alshisha
            </span>
        </div>
        <div className="topright">
            <div className="topBarIconContainer">
                <NotificationsNone/>
                <span className="topIconBag">2</span>
            </div>
            <div className="topBarIconContainer">
                <Language/>
                <span className="topIconBag">2</span>
            </div>
            <div className="topBarIconContainer">
                <Settings/>
                <img src="../topbar/profilepic" alt="" className="topAvatar" />
            </div>
        </div>
    </div>
    <Home/>
</div>
);
