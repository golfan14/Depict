import React, { Component } from 'react';
import Photo from "./Photo";
import API from "../../routes/api/";


class Carousel extends Component {
        state = {
            tripClicked : false,
            tripId : null
        }
    
    getPhotos = tripId => {
        const photosArray = API.findTrip(tripId);
        console.log(photosArray);

    }
    
    addPhoto = tripId => {
        API.findTrip(tripId);
    }

    render() {

        return (
            <div class="trip-wrap">
                <div class="carousel-wrap">
                    <div onClick={this.addPhoto} class = "carousel-item add-photo">
                        Add Photo
                    </div>
                    <Photo/>
                </div>
            </div>
        )


    }
}

export default Carousel;