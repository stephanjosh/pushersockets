import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import axios from "axios";
import Pusher from "pusher";
import ChartList from "./ChatList";
import ChatBox from "./ChatBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      username : '',
      chats : []
    }
  }
  componentDidMount(){
    const username =window.prompt('User name', 'Steph');
    this.state({username});
    const pusher = new Pusher('59493bc8aff2ed5d98da',{
      cluster: 'ap2',
      encrypted: true
    });

    const channel =pusher.subscribe('chat');
    channel.bind('message', data =>{
      this.setState({chats: [...this.state.chats, data], test: ''})
    })
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleTextChange(e){
    if(e.keyCode===13){
      const payload = {
        username :this.state.username,
        message: this.state.text
      };
      axios.post('http://localhost:5000/message', payload)
    }else{
      this.setState({text: this.target.value})
    }
  }
  render(){
    return(
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo'/>
          <h1 className='App-title'>Welcome to react pusher Chat</h1>
        </header>
        <section>
          <ChartList chats={this.state.chats}/>
          <ChatBox
          text={this.state.text}
          username ={this.state.username}
          handleTextChange={this.handleTextChange}/>
        </section>
        </div>
    )
  }
}


// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
