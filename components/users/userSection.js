import React, {Component} from 'react';
import UserForm from './userForm';
import UserList from './userList';

class UserSection extends Component {
    render(){
        return ( 
            <div className='support panel panel-primary'>
                <div className='panel-heading'>
                    <strong>Users</strong>
                </div>
                <div className='panel-body users'>
                    <UserList {...this.props} />
                    <UserForm {...this.props} />
                </div>    
            </div>    
        );
    }
}

export default UserSection;