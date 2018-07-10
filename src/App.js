import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Facebook from './components/Facebook';
import Map from './components/Map';
import Footer from './components/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        isLoggedIn: false,
        userId: null
      }
  } 
    this.logIn = this.logIn.bind(this)  
  }

  logIn(user) {
    this.setState({
      user
    })
  }


  render() {
    const isLoggedIn = this.state.user.isLoggedIn
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Depict</h1>
        </header>
        <p className="App-intro">
          {/* To get started, sign in with Facebook. */}
        </p>
        {!isLoggedIn && (<Facebook userdata={this.state.user} LogInfn={this.logIn}/>)}
        {isLoggedIn && (<Map />)}
        


        <Footer />
      </div>
    );
  }
}

export default App;
