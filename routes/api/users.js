const router = require("express").Router();
const photosController = require("../../controllers/usersController");


//all routes inside this file preceeded by api/users...
router.route("/:id")
.post(usersController.createUser);



