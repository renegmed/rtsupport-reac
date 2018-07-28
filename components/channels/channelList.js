import React, {Component} from 'react';
import Channel from './channel';

class ChannelList extends Component{
  render(){
    const {setChannel, addChannel} = this.props;
    console.log("----- ChannelList.render() --------");
    console.log("  ++++ typeof setChannel +++++");
    console.log(typeof setChannel);   // function definded in app.js

    console.log("  ++++ typeof addChannel +++++");
    console.log(typeof addChannel);   // function defined in app.js


    return (
      <ul>{
        this.props.channels.map( chan =>{
          return <Channel 
            channel={chan}
            key={chan.id}
            {...this.props}
          />
        })
      }</ul>
    )
  }
}

// ChannelList.propTypes = {
//   channels: React.PropTypes.array.isRequired,
//   setChannel: React.PropTypes.func.isRequired,
//   activeChannel: React.PropTypes.object.isRequired
// }

export default ChannelList