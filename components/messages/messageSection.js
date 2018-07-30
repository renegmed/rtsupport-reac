import React, {Component} from 'react';
import MessageList from './messageList';
import MessageForm from './messageForm';

export default class MessageSection extends Component {
    render() {
        let {activeChannel} = this.props;
        console.log("======= activeChannel: ", activeChannel);

        return (
            <div className='messages-container panel panel-default'>
                <div className='panel-heading'>
                    <strong>{activeChannel.name}</strong>                    
                </div>
                <div className='panel-body messages'>
                    <MessageList {...this.props} />
                    <MessageForm {...this.props} />
                </div>
            </div>
        );
    }
}