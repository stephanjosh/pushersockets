import logo from './logo.svg';
import './App.css';
import React, { Component } from "react";
import axios from "axios";
import Pusher from "pusher-js";
import ChartList from "./ChatList";
import ChatBox from "./ChatBox";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      username : '',
      chats : []
    };
    this.handleTextChange = this.handleTextChange.bind(this);
  }
  componentDidMount(){
    const username =window.prompt('User name', 'Steph');
    //updated here
    this.setState({username});
    const pusher = new Pusher('59493bc8aff2ed5d98da',{
      cluster: 'ap2',
      encrypted: true
    });

    //rather unusual
    const channel =pusher.subscribe('chat');
    channel.bind('message', data =>{
      this.setState({chats: [...this.state.chats, data], test: ''})
    })
    // this.handleTextChange = this.handleTextChange.bind(this);
  }
  handleTextChange(e){
    if(e.keyCode===13){
      const payload = {
        username :this.state.username,
        message: this.state.text
      };
      axios.post('http://localhost:5000/message', payload)
      console.log("post data", payload)
    }else{
      //changed the this to e
      this.setState({text: e.target.value})
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
export default App;
