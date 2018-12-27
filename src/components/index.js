
import React from 'react'
import logo from '../assets/chat.png'
import {Container, Image} from 'semantic-ui-react'
import styled from 'styled-components'
import ChatRoom from '../components/ChatRoom'


const Logo = styled.div`
      img{
        margin-left: auto;
        margin-right: auto;
        margin-top: 15px;      
      }
      
`;

class App extends React.PureComponent {
  render() {
    return <Container className = {'chat-app'}>
    
    <Container className={'spotim-header'}>
      <div className={'spotim-title'}>
        <b>Welcom to ChatApp</b>
      </div>   
      <div>
        <Logo>
          <Image size={'tiny'} src={logo}/>
        </Logo>
      </div>
    </Container>
    <Container>
    <ChatRoom/>
    </Container>
    </Container>
  
  }
}

export default App;