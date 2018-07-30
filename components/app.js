import React, {Component} from 'react';
import ChannelSection from './channels/channelSection';
import UserSection from './users/userSection';
import MessageSection from './messages/messageSection';

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
    let ws = this.ws = new WebSocket('ws://echo.websocket.org');
    ws.onmessage = this.message.bind(this);
    ws.onopen = this.open.bind(this);
    ws.onclose = this.close.bind(this);
  }

  message(e) {
    const event = JSON.parse(e.data);
    if (event.name === 'channel add') {
      this.newChannel(event.data);  // store event.data into state.channels[]
    }
  }

  open() {
    this.setState({connected: true});
  }

  close() {
    this.setState({connected: false});
  }

  newChannel(channel) {
    let {channels} = this.state;
    channels.push(channel);
    this.setState({channels});
  }

  addChannel(name){

    // console.log('------- function addChannel() name --------');
    // console.log(name);
    let {channels} = this.state;
    //channels.push({id: channels.length, name});
    //this.setState({channels});
    // TODO: Send to server
    let msg = {
      name: 'channel add',
      data: {
        id: channels.length,
        name
      }
    }      
    this.ws.send(JSON.stringify(msg)); // send to 'ws://echo.websocket.org'
  }
  setChannel(activeChannel){
    // console.log('------- function setChannel() activeChannel --------');
    // console.log(activeChannel);

    this.setState({activeChannel});
    // TODO: Get Channels Messages
  }

  setUserName(name) {
    // console.log('------- function addUser() name --------');
    // console.log(name);
    let {users} = this.state;    
    users.push({id: users.length, name}); // user id is based on the updata users[] length. name is supplied from UserForm
    this.setState({users});  // replace existing users[] with new one     
    // TODO: Send to server
  }

  setUser(activeUser){
    // console.log('------- function setChannel() activeUser --------');
    // console.log(activeUser);
    this.setState({activeUser});        
  }
   

  addMessage(body) {
    let {messages, users, activeUser} = this.state;
    let createdAt = new Date;
    let author = users.length > 0 ? ( activeUser? activeUser.name : users[0].name ) : 'anonymous';
    
    messages.push({id: messages.length, body, createdAt, author});
    this.setState({messages});
    
    // TODO: Send to server
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