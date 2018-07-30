import React, {Component} from 'react';

export default class UserForm extends Component {
    onSubmit(e) {
        e.preventDefault();
        // console.log("------------ UserForm -------");
        // console.log("     +++++++ onSubmit this.refs.user -------");
        // console.log(this.refs.user);
        
        const node = this.refs.userName;
        const userName = node.value;
        this.props.setUserName(userName); // invoke function addUser() as property
        node.value = '';              // clear input field ref='user'
    }
    render() {
        return (
            <form onSubmit = {this.onSubmit.bind(this)} >
                <div className="form-group">
                    <input 
                        className="form-control"
                        placeholder = "Set Your Name..."
                        type="text"
                        ref="userName"
                    />
                </div>    
            </form>
        );
    };
}