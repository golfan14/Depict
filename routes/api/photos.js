const router = require("express").Router();
const photosController = require("../../controllers/photosController");


//all routes inside this file preceeded by api/photos...
router.route("/:id")
.get(photosController.findTrip)
// .post(photosController.addPhoto);

.post(console.log("hit the git"));



module.exports = router;