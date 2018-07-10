import axios from "axios";

export default {
    addPhoto: function(id) {
        return axios.post("/api/photos/" + id);
    },
    findTrip: function(id) {
        return axios.get("/api/photos/" + id);
    }
}