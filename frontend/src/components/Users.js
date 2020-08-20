import React, {Component} from "react";
import {API_URL} from "../App";

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            users: []
        };
    }

    componentDidMount() {
        fetch(API_URL + "/users")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        users: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, users} = this.state;

        if (!isLoaded)
            return (
                <div>
                    <h1>Users</h1>
                    <p>None.</p>
                </div>
            );

        return (
            <div>
                <h1>Users</h1>
                <ul>
                    {users.map(user => (
                        <li key={user.id}>
                            {user.name} {user.email}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Users;
