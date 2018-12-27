
import React from 'react'
import Messages from '../components/Messages'
import SendMessage from '../components/SendMessage'
import UsernameComp from '../components/UsernameComp'
const uuid = require('uuidv4');

/*This is the parent component of all other components.*/
class ChatRoom extends React.Component{

    constructor(props){

        super(props);
        
        this.state = {
                userName: '',
                message: '',
                messages: [],
                userId: uuid(),
                avatar: defaultAvatar
        };
    }

    myCallback = (dataFromChild) => {
        this.setState({userName: dataFromChild}) ;
    }
    myCallback2 = (dataFromChild) => {
        this.setState({message: dataFromChild}) ;
    }

        render(){
            return (<div className = {'app'}>   
            <SendMessage  callbackFromParent={this.myCallback2} username={this.state.userName} userId={this.state.userId} avatar={this.displayImg} />        
            <UsernameComp callbackFromParent={this.myCallback}/>
            <Messages message ={this.state.message} username={this.state.userName} userId={this.state.userId} avatar={this.state.avatar}/>
            </div>)
        }
    }

    export default ChatRoom;    
 