const router = require("express").Router();
const photoRoutes = require("./photos");

// Book routes
router.use("/photos", photoRoutes);

module.exports = router;
