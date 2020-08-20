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
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        messages: result
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
        const {error, isLoaded, messages} = this.state;

        console.log('error',error);
        console.log('is loaded',isLoaded);
        console.log('messages',messages);

        if (!isLoaded)
            return (
                <div>
                    <h1>Messages</h1>
                    <p>None.</p>
                </div>
            );

        return (
            <div>
                <h1>Messages</h1>
                <ul>
                    {messages.map(message => (
                        <li key={message.id}>
                           Title: {message.title} Message: {message.message}
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default Messages;
