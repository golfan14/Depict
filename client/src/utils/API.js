import axios from "axios";

export default {
    addPhoto: function(id) {
        console.log(id);
        return axios.post("/api/photos/" + id);

    },
    findTrip: function(id) {
        console.log(id);
        return axios.get("/api/photos/" + id);
    },
    createUser: function(id) {
        return axios.post("/api/users/" + id);
    }
}