import React from 'react'

//This component is for the user to choose his details
class UsernameComp extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            
            disabledFlag:false
        };
    }

    //Makes username unchangeble after entering it
    pressedEnter(e) {
        
        if (e.key === 'Enter') {
            this.setState({disabledFlag: true}) ;
            this.props.callbackFromParent(e.target.value);
        }
            }

    render(){

        return (
            <div className="online-users">

            <text className="text">Username:</text>
            <input 
            disabled={this.state.disabledFlag}
                        className="username-input"
                        placeholder=""
                        type="text"
                        onKeyPress={this.pressedEnter.bind(this)}/>
           </div>
        )
    }
    
}

export default UsernameComp