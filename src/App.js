import React, { Component } from 'react';
import SimpleMap from './components/SimpleMap';

import Facebook from './components/Facebook';
import Map from './components/Map';


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
  };

  logIn(user) {
    this.setState({
      user
    })
  };


  render() {
    const isLoggedIn = this.state.user.isLoggedIn
    return (
      <div className="map">
       
      </div>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Depict</h1>
        </header>
        <p className="App-intro">
          {/* To get started, sign in with Facebook. */}
        </p>

        <MapContainer addLocation = {this.addLocation} markers = {this.state.markers}/>

        {!isLoggedIn && (<Facebook userdata={this.state.user} LogInfn={this.logIn}/>)}
        {isLoggedIn && (<Map />)}
      </div>
      
    );
  }
};

export default App;


