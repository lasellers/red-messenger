import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';

import {BrowserRouter, Link, Route, Switch} from "react-router-dom";

import HomePage from "./components/HomePage";
import Users from "./components/Users";
import Messages from "./components/Messages";
import Login from "./components/Login";
import Logout from "./components/Logout";
import Register from "./components/Register";
import AboutUs from "./components/About";
import NotFoundPage from "./components/NotFoundPage";
import store from "./redux/store";

export const API_URL = "http://localhost:3001/api";

function App(props) {
    const [user, setUser] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    store.subscribe(function () {
        const user = store.getState().user;
        setUser(user.user);
        setIsLoggedIn(user.isLoggedIn);
    });

    let nav;
    if (isLoggedIn) {
        nav = <>
            <Nav className="mr-auto">
                <Nav.Link as={Link} to="/">Home</Nav.Link>
                <Nav.Link as={Link} to="/users">Users</Nav.Link>
                <Nav.Link as={Link} to="/messages">Messages</Nav.Link>
                <Nav.Link as={Link} to="/about">About Us</Nav.Link>
            </Nav>

            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
            </Nav>
        </>;
    } else {
        nav = <>
            <Nav className="ml-auto">
                <Nav.Link as={Link} to="/register">Register</Nav.Link>
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
            </Nav>
        </>;
    }

    return (
        <BrowserRouter>
            <header id="App-header">
                <h1>Red Messenger {user.name}</h1>
            </header>

            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    {nav}
                </Navbar.Collapse>
            </Navbar>

            <main className="App">
                <div id="App-body">
                    <Switch>
                        <Route path="/" component={HomePage} exact/>
                        <Route path="/home" component={HomePage}/>
                        <Route path="/register" component={Register} exact/>
                        <Route path="/login" component={Login} exact/>
                        <Route path="/logout" component={Logout} exact/>
                        <Route path="/users" component={Users}/>
                        <Route path="/messages" component={Messages}/>
                        <Route path="/about" component={AboutUs}/>
                        <Route component={NotFoundPage}/>
                    </Switch>
                </div>
            </main>

        </BrowserRouter>
    )
}

export default App;

/*
                <Navbar.Brand><Link to="/">Red Messenger</Link></Navbar.Brand>

                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider/>
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>


                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2"/>
                        <Button variant="outline-success">Search</Button>
                    </Form>

 */
