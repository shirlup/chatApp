import React from 'react'
import * as index from "../index";
import noimg from '../assets/noimg.jpg'
import {Container, Image} from 'semantic-ui-react'


class Messages extends React.Component{

    constructor(props){

        super(props);
      const socket = index.createSocket();

      this.state = {
        userName: '',
        message: '',
        messages: [],
        myMessage:'',
       // avatar:this.props.avatar
        
    };


      socket.on('spotim/chat',(data) => {
          this.publishMessage(data);
                      
    });

    }

    publishMessage(data){
        if (data.userId !== this.props.userId  ){
            this.setState({messages: [...this.state.messages, data]})
         }
    }
    componentWillMount(){
 
      }
      componentWillReceiveProps(nextProps) {
    
            this.setState({messages: [...this.state.messages, nextProps.message]})
      }


    displayAvatar(avatar){
        console.log("got here");
        <avatar>
        <Image size={'tiny'} src={noimg}/>
      </avatar>
    }


    render(){
        
        return (
            <div className="messages">
            {this.state.messages.map((message, index) => {
                return (                
                    <div><div key={index} className="message-text">
                    <div className="img">{message.avatar}</div>
                    <div className="Date">{message.messageTime}</div>
                    <div className="userName">{message.user}</div>
                    <div className={`${message.myMessage}`}>{message.message} </div>
                    </div></div>
                )
            })}
           
        </div>
    )
    }
}

export default Messages