import React, {Component} from 'react';
import fecha from 'fecha';

export default class Message extends Component {
    render() {
        let {message} = this.props;
        let createdAt = fecha.format(message.createdAt, 'HH:mm:ss MM/DD/YYYY');
        return (
            <li className='message'>
                <div className='author'>
                    <strong>{message.author}</strong>
                    <li className='timestamp'>{createdAt}</li>
                </div>
                <div className='body'>{message.body}</div>
            </li>    
        );
    }
}