import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react'; //InfoWindow
import Search from "./Search";

/*global google*/


export class MapContainer extends Component {



  render() {

    let points = [
      { lat: 42.02, lng: -77.01 },
      { lat: 42.03, lng: -77.02 },
      { lat: 41.03, lng: -77.04 },
      { lat: 42.05, lng: -77.02 }
    ];
    var bounds = new this.props.google.maps.LatLngBounds();
    for (let i = 0; i < points.length; i++) {
      bounds.extend(points[i]);
    };

    return (

      <div>
        <Search addLocation = {this.props.addLocation} />
        <Map google={this.props.google} zoom={14}
          //   initialCenter={{
          //     lat: 42.39,
          //     lng: -72.52
          // }}
          bounds={bounds}>
          {this.props.markers.map(marker => (
            <Marker
              name = {marker.name}
              position = {{lat: marker.lat, lng: marker.lng}}
              key = {marker.name} /> // future use database id (something that cannot be repeated)
          ))}
          <Marker
            title={'The marker`s title will appear as a tooltip.'}
            name={'SOMA'}
            position={{ lat: 37.778519, lng: -122.405640 }} />
          <Marker
            name={'Dolores park'}
            position={{ lat: 37.759703, lng: -122.428093 }} />
          <Marker />
          <Marker
            name={'Your position'}
            position={{ lat: 37.762391, lng: -122.439192 }}
            icon={{
              url: "/path/to/custom_icon.png",
              anchor: new google.maps.Point(32, 32),
              scaledSize: new google.maps.Size(64, 64)
            }} />
          {/* <Marker onClick={this.onMarkerClick}
          name={'Current location'} /> */}

          {/* <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
                <h1>{this.state.selectedPlace.name}</h1>
              </div> */}
          {/* </InfoWindow> */} 
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyDrqW5ESQY0OWpnObTzF9rUKe6x7-5eSX4")
})(MapContainer)