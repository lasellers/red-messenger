import React from 'react';
import './NavBar.css';
import HomePage from './HomePage';
import Users from './Users';
import Messages from './Messages';
import Login from './Login';
import Logout from './Logout';
import NotFoundPage from './NotFoundPage';
import {BrowserRouter, Route, Switch, Router, Link} from "react-router-dom";

class NavBar extends React.Component {

    render() {

        return (
            <nav>
                    <Route path = "/" component = {HomePage} />
                    <Route path = "users" component = {Users} />
                    <Route path = "messages" component = {Messages} />
                    <Route path = "login" component = {Login} />
                    <Route path = "logout" component = {Logout} />
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/messages">Messages</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to="/logout">Logout</Link>
                    </li>

                </ul>
            </nav>
        );
    }
}

export default NavBar;
