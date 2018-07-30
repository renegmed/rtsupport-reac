import React, {Component} from 'react';
import Message from './message';

export default class MessageList extends Component {
    render() {
        return (
            <ul> 
            {
                this.props.messages.map( message => {
                    return (
                        <Message key={message.id? message.id : ''} message={message} />
                    );
                })        
            }
            </ul>
        );
    }
}
