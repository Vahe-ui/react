import React, { Component } from 'react';
import './App.css';

import Header from './components/header/Header';

class App extends Component {

  state = {
    counter: false
  }
 
  // tnayin amrenia to america and reverse

  constructor(props) {
    super(props);
    this.handleCounterUp = this.handleCounterUp.bind(this);
    // this.handleCounterDown = this.handleCounterDown.bind(this);
  }

  handleCounterUp() {
    // if(this.state.counter === "Armenia") {
    //   this.setState({counter: "America"})
    // } else {
    //   this.setState({counter: "Armenia"})
    // }
    this.setState({counter: !this.state.counter})
  }

  render() {
    
    return (
      <div>
        <Header  navigation={this.props.nav}/>
        <button onClick={this.handleCounterUp}>count up</button>
        <p>my counter is {this.state.counter ? "Armenia" : "Ameriaa"}</p>
      </div> 
    );
  }
}

export default App;
