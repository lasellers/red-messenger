import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "./Logout.css";

export default function Logout() {

    function validateForm() {
        return true;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                    Logout
                </Button>
            </form>
        </div>
    );
}
