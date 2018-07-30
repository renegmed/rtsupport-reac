import React, {Component} from 'react';
import User from './user';

export default class UserList extends Component {

    render() {
        // console.log(" -------- UserList.render() ---------");
        // console.log("   +++++++++ render this.props.users ++++++++");
        // console.log(this.props.users);
        return (
            <ul> {
                this.props.users.map( user => {
                    return (
                        <User 
                        user = {user} 
                        key = {user.id}
                        {...this.props}
                        />
                    );
                })
            }
            </ul>    
        );
    }
}