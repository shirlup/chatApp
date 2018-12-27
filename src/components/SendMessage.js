import React from 'react'
import * as index from "../index";
import { Button } from 'react-bootstrap';

//This component is incharge of the user line input at the bottom of the app
class SendMessage extends React.Component{

    constructor(props){
        
        super(props);

        this.state = {
         
            userName: 'Anonymous', //default username
            message: '',
            myMessage: '',
            disabledFlag:false,
        };
    }

    //from this method the user sends messages from the socket
     send() {
        
        const socket = index.createSocket();
        if(this.state.message.length > 0){
            socket.emit('spotim/chat',{user:this.props.username || this.state.userName, message:this.state.message,myMessage:'other-message',userId: this.props.userId,messageTime:this.getTime(new Date(Date.now()))});
            this.setState( {message: '',myMessage:'' });
            this.props.callbackFromParent({user:this.props.username || this.state.userName, message:this.state.message,myMessage:'my-message',userId: this.props.userId,messageTime: this.getTime(new Date(Date.now()))});
        }
        this.state.message = "";
    }

    getTime(date){
        
        return `${date.getHours()}:${("0"+date.getMinutes()).slice(-2)}`;
    }    

    handleUsernameChange(e) {
        this.setState( {userName: e.target.value });
      }

    handleChange(e) {
       this.setState( {message: e.target.value });
     }


     pressedEnter2(e) {

        if (e.key === 'Enter') {
            this.send();
            "/n";
        }
     }
        render() {
    
            return (
               <div className="body-m"> 
                    <input value={this.state.message}
                    className="send-message-input"
                        placeholder=""
                        type="text"
                        onChange={ this.handleChange.bind(this) }
                        onKeyPress={this.pressedEnter2.bind(this)}
                    />
                    <Button bsStyle="primary" bsSize="primary   " className="send-button" onClick={this.send.bind(this)}>
                    Send message
                    </Button>
                </div>
            )
        }
      
    }

export default SendMessage