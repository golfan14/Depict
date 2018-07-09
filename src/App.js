import React, { Component } from 'react';
import SimpleMap from './components/SimpleMap';

class App extends Component {
  // state = {
  //    pins: []// list of push pins 
  //    //in componentDidMount, get pins form database and update state
  //    //passed through to the map component 

  // }
  // //method
  //   // takes in location geocodes location ( name of location)
  //   // give lat and lng 
  //   // pushes to database
  //   // pull updated list from database

  // //give search bar above method as a prop 
  //   // inside handleFormdsubmit ()
  //   // 

  render() {
    return (
      <div className="map">
       
        <SimpleMap />

      </div>
     
    );
  }
}

export default App;


