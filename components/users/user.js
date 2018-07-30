import React, {Component} from 'react';

export default class User extends Component {
    onClick(e) {
        // console.log("------ User.onClick() -------");
        e.preventDefault();
        const {setUser, user} = this.props;
        setUser(user);   
        // console.log("  +++ this.props ++++");
        // console.log(this.props);
    }

    render() {
        //console.log("------ User.render() -------");
        const {user, activeUser} = this.props;
        // console.log("  +++ user ++++");
        // console.log(user);

        // console.log("  +++ activeUser ++++");
        // console.log(activeUser);
    
        const active = user === activeUser ? 'active' : '';
        
        // console.log("  +++ active ++++");
        // console.log(active);

        return ( 
            <li className={active}>
                <a onClick={this.onClick.bind(this)} >{user.name}</a>
            </li>
    )};


    
}