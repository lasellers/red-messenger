import React, {useState} from "react";
import {Button, Form} from "react-bootstrap";
import "./Login.css";
import {API_URL} from "../App";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState({});

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(event.target);

        const requestOptions = {
            method: 'POST',
            redirect: 'follow',
            headers: {'Content-Type': 'application/json'}//,
            /*body: JSON.stringify({
                username: email,
                password: password
            })*/
        };
        console.log(requestOptions);
        console.log('email', email);
        console.log('password', password);

        fetch(API_URL + `/login?username=${email}&password=${password}`, requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    setUser(result);
                    setIsLoaded(result.isLoggedIn);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(false);
                    // error
                }
            )
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        autoFocus
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
                    />
                </Form.Group>
                <Button block disabled={!validateForm()} type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
}
