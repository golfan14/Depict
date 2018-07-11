import React, { Component } from 'react';
import Photo from "./Photo";
import API from "../utils/API";


class Carousel extends Component {
        state = {
            tripClicked : false,
            tripId : null
        }
    
    // getPhotos = tripId => {
    //     const photosArray = API.findTrip(tripId);
    //     console.log(photosArray);

    // }
    
    addPhoto = (tripId  , event) => {
        event.preventDefault();
        API.findTrip(tripId);
        // console.log("::!!!!!!");
    }


    render() {

        return (
            <div className="trip-wrap">
                <div className="carousel-wrap">
                    <div className = "photo-carousel-item add-photo">
                        Add Photo
                        {/* <form ref="uploadForm" enctype="multipart/form-data">
                            <input type="file" name="sampleFile"/>
                            <br/><br/> */}
                            <input onClick={event => this.addPhoto(123456 , event)} type="submit" value="Upload!"/>
		                {/* </form> */}
                    </div>
                    <Photo/>
                </div>
            </div>
        )


    }
}

export default Carousel;