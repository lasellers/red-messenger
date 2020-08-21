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
            <>
                <h1>Users</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Users;
