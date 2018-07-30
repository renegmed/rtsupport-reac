import React, {Component} from 'react';
import ChannelSection from './channels/channelSection';
import UserSection from './users/userSection';
import MessageSection from './messages/messageSection';
import Socket from '../socket';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      channels: [],
      users: [],
      messages: [],
      activeChannel: {},
      connected: false
    };
  }

  componentDidMount() {
    //let ws = this.ws = new WebSocket('ws://echo.websocket.org');
    let socket = this.socket = new Socket();
    socket.on('connect', this.onConnect.bind(this));
    socket.on('disconnect', this.onDisconnect.bind(this));
    socket.on('channel add', this.onAddChannel.bind(this));
    socket.on('user add', this.onAddUser.bind(this));
    socket.on('user edit', this.onEditUser.bind(this));
    socket.on('user remove', this.onRemoveUser.bind(this)); 
    socket.on('message add', this.onMessageAdd.bind(this) );   
  }
  onMessageAdd(message){
    let {messages} = this.state;
    messages.push(message);
    this.setState({messages});
  }
  onRemoveUser(removeUser) {
    let {users} = this.state;
    users = users.filter(user => {
      return user.id !== removeUser.id;
    });
    this.setState({users});
  }  
  onAddUser(user) {
    let {users} = this.state;
    users.push(user);
    this.setState({users});
  }
  onEditUser(editUser) {
    let {users} = this.state;
    users = users.map(user => {
      if(editUser.id === user.id){
        return editUser;
      }
      return user;
    });
    this.setState({users});
  }
  onConnect() {
    this.setState({connected: true});
    this.socket.emit('channel subscribe');
    this.socket.emit('user subscribe');
  }
  
  onDisconnect() {
    this.setState({connected: false});
  }

  onAddChannel(channel) {
    let {channels} = this.state;
    channels.push(channel);
    this.setState({channels});
  }

  addChannel(name){
     this.socket.emit('channel add', {name});
  }

  setChannel(activeChannel){ 
    this.setState({activeChannel});
    this.socket.emit('message unsubscribe');
    this.setState({messages: []});
    this.socket.emit('message subscribe', {channelId: activeChannel.id});
  }

  setUserName(name) {
    this.socket.emit('user edit', {name});
  }

  setUser(activeUser){
    // console.log('------- function setChannel() activeUser --------');
    // console.log(activeUser);
    this.setState({activeUser});        
  }
   

  addMessage(body) {
     let {activeChannel} = this.state;
     this.socket.emit('message add',
        {channelId: activeChannel.id, body} );
  }
  
  render(){
    return (
      <div className='app'>
        <div className='nav'>
          <ChannelSection 
            {...this.state}
            addChannel={this.addChannel.bind(this)}   // addChannel() function added to props 
            setChannel={this.setChannel.bind(this)}   // setChannel() function updates current selected channel to props   
          />         
          <UserSection 
            {...this.state}           
            setUserName={this.setUserName.bind(this)}   // setUserName() function added to props  
            setUser={this.setUser.bind(this)}           // setUser() function updates current selected user to props  
          />
        </div>
        <MessageSection 
          {...this.state}
          addMessage={this.addMessage.bind(this)}
        />  
      </div>
    );           
  }
}

export default App 