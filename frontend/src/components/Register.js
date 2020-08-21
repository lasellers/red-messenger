import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Register.css";
import {API_URL} from "../App";
import {Redirect} from "react-router";

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedin] = useState(false);

    function validateForm() {
        return email.length > 0 && password.length > 0 && name.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            redirect: 'follow',
            headers: {'Content-Type': 'application/json'}//,
            /*body: JSON.stringify({
                username: email,
                password: password
            })*/
        };

        fetch(API_URL + `/user?email=${email}&password=${password}&name=${name}`, requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    setUser(result);
                    setIsLoaded(true);
                    setIsLoggedin(true);
                },
                (error) => {
                    setIsLoaded(false);
                    // error
                }
            )
    }

    if(isLoggedIn) {
        return <Redirect to='/users' />;
    }

    return (
        <div className="Register">
            <form onSubmit={handleSubmit}>
                <Form.Group controlId="name" bsSize="large">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        autoFocus
                        type="name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="email" bsSize="large">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password" bsSize="large">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </Form.Group>
                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                    Register
                </Button>
            </form>
        </div>
    );
}
