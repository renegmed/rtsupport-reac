import React, {Component} from 'react';

class Channel extends Component{
  onClick(e){
    e.preventDefault();
    const {setChannel, channel} = this.props;
    console.log("------ Channel.onClick() -------");
    
    console.log("  +++ this.props ++++");
    console.log(this.props);

    console.log("  +++ setChannel ++++");
    console.log(setChannel);

    console.log("  +++ channel ++++");
    console.log(channel);

    setChannel(channel);
  }
  render(){
    console.log("------ Channel.render() -------");
    const {channel, activeChannel} = this.props;
    console.log("  +++ channel ++++");
    console.log(channel);

    console.log("  +++ activeChannel ++++");
    console.log(activeChannel);
    
    const active = channel === activeChannel ? 'active' : '';
  
    console.log("  +++ active ++++");
    console.log(active);

    return (
      <li className={active}>
        <a onClick={this.onClick.bind(this)}>
          {channel.name}
        </a>
      </li>
    )
  }
}

// Channel.propTypes = {
//   channel: React.PropTypes.object.isRequired,
//   setChannel: React.PropTypes.func.isRequired,
//   activeChannel: React.PropTypes.object.isRequired
// }

export default Channel