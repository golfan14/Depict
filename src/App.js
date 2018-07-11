import React, { Component } from 'react';
import './App.css';
import Facebook from './components/Facebook';
import MapContainer from './components/Map';
import Carousel from './components/Carousel';
import Footer from './components/Footer';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        isLoggedIn: false,
        userId: null
      },
      markers: [],
      lat: 37.0902,
      lng: -95.7129

    }
    this.logIn = this.logIn.bind(this)
  };

  logIn(user) {
    this.setState({
      user
    })
  };

  // map markers====================================================


  // state = {
  //   markers: []
  // };


  addLocation = data => {
    if (data) {
      const marker = {
        name: data.gmaps.formatted_address,
        lat: data.location.lat,
        lng: data.location.lng
      }
      this.setState({ markers: [...this.state.markers, marker], lat: data.location.lat, lng: data.location.lng })
    }

  }




  render() {
    const isLoggedIn = this.state.user.isLoggedIn
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <div class="brand-wrap">
          <div class="logo-container">
          <svg viewBox="0 0 402.8 483">
          <g>
	<g>
		<path class="st0" d="M126.4,378H76.8c-17.8,0-32.2-14.5-32.2-32.2V164.6c0-17.8,14.4-32.2,32.2-32.2h46.4
			c7-4.7,14.4-8.8,22.1-12.3H76.8c-24.5,0-44.5,20-44.5,44.5v181.2c0,24.5,19.9,44.5,44.5,44.5h73.4
			C141.9,386.9,134,382.8,126.4,378z M325.9,120.1h-61.3c7.7,3.4,15.1,7.5,22.1,12.3h39.2c17.8,0,32.2,14.5,32.2,32.2v181.2
			c0,17.8-14.4,32.2-32.2,32.2h-42.3c-7.6,4.8-15.5,8.9-23.8,12.3h66.1c24.5,0,44.5-20,44.5-44.5V164.6
			C370.3,140,350.4,120.1,325.9,120.1z"/>
	</g>
</g>
<g>
	<g>
		<path class="st0" d="M148.9,82.3h135.2c-2.3,7.3-9.2,12.5-17.2,12.5H144.1c-9.9,0-18-8.1-18-18v-41c0-9.9,8.1-18,18-18H267
			c7.9,0,14.8,5.2,17.2,12.5H148.9c-6.1,0-11,4.9-11,11v30.2C137.9,77.4,142.8,82.3,148.9,82.3z"/>
	</g>
</g>
<path id="center" class="st0" d="M291.1,256c0,47.1-38.3,85.5-85.4,85.5c-47.1,0-85.4-38.3-85.4-85.5c0-47.1,38.3-85.4,85.4-85.4
	C252.7,170.6,291.1,208.9,291.1,256z"/>
<path class="st0" d="M205.8,142.4c-62.8,0-113.6,50.9-113.6,113.6c0,62.8,50.9,113.6,113.6,113.6S319.5,318.8,319.5,256
	C319.5,193.3,268.6,142.4,205.8,142.4z M205.6,357.5c-56,0-101.4-45.4-101.4-101.5c0-56,45.4-101.4,101.4-101.4
	c56,0,101.4,45.4,101.4,101.4C307.1,312.1,261.6,357.5,205.6,357.5z"/>
  </svg>

          </div>
          <h1 className="App-title">Depict</h1>
          <div class="title-dash"></div>
          </div>

        <p className="App-intro">
          {/* To get started, sign in with Facebook. */}
        </p>
        {/* <Search addLocation = {this.props.addLocation} /> */}
        {!isLoggedIn && (<Facebook userdata={this.state.user} LogInfn={this.logIn} />)}
        </header>
        {isLoggedIn && (<MapContainer />)}
        {isLoggedIn && (<Carousel />)}
        {/* <Footer/> */}

        <MapContainer addLocation={this.addLocation} markers = {this.state.markers} lat={this.state.lat} lng={this.state.lng}/>

        <Footer />
      </div>

    );
  }
}

export default App;
