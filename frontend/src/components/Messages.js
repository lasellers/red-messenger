import React from 'react';
import {API_URL} from "../App";

class Messages extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            messages: []
        };
    }

    componentDidMount() {
        fetch(API_URL + "/messages")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        messages: result
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const {error, isLoaded, messages} = this.state;

        if (!isLoaded)
            return (
                <div>
                    <h1>Messages</h1>
                    <p>None.</p>
                </div>
            );

        return (
            <>
                <h1>Messages</h1>

                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>id</th>
                        <th>Title</th>
                        <th>Message</th>
                        <th>UserId</th>
                        <th>RepliedTo</th>
                    </tr>
                    </thead>
                    <tbody>
                    {messages.map(message => (
                        <tr key={message.id}>
                            <td>{message.id}</td>
                            <td>{message.title}</td>
                            <td>{message.message}</td>
                            <td>{message.userId}</td>
                            <td>{message.repliedTo}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </>
        );
    }
}

export default Messages;
