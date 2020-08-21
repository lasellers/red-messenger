import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Logout.css";
import {API_URL} from "../App";
import {Redirect} from "react-router";

export default function Logout() {

    const [email, setEmail] = useState("");
    const [isLoaded, setIsLoaded] = useState(false);
    const [user, setUser] = useState({});
    const [isLoggedIn, setIsLoggedin] = useState(false);

    function validateForm() {
        return email.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();

        const requestOptions = {
            method: 'GET',
            redirect: 'follow',
            headers: {'Content-Type': 'application/json'}//,
            /*body: JSON.stringify({
                username: email,
                password: password
            })*/
        };

        fetch(API_URL + `/login?username=${email}`, requestOptions)
            .then(res => res.json())
            .then(
                (result) => {
                    setUser(result);
                    setIsLoaded(true);
                    setIsLoggedin(result.isLoggedIn);
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
        <div className="Logout">
            <form onSubmit={handleSubmit}>
                <Button block disabled={!validateForm()} type="submit">
                    Logout
                </Button>
            </form>
        </div>
    );
}
