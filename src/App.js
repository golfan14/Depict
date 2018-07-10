import React, { Component } from 'react';
import Facebook from './components/Facebook';
import MapContainer from './components/Map';
import Carousel from './components/Carousel';
import Footer from './components/Footer';


class App extends Component {



 //log in =======================================================
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

// map markers====================================================


state = {
  markers: []
};


addLocation = data => {
 if (data) {
  const marker = {
    name: data.gmaps.formatted_address,
    lat: data.location.lat,
    lng: data.location.lng
  }
  this.setState({ markers: [...this.state.markers, marker]})
 }
  
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
    {isLoggedIn && (<Carousel />)}
        {/* <Footer/> */}

        <MapContainer addLocation = {this.addLocation} markers = {this.state.markers}/>

        <Footer />
      </div>
      
    );
  }
};

export default App;


