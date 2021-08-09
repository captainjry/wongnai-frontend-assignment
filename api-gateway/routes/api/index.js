const router = require("express").Router();
const controllers = require("../../controllers/trips.controller");

router.get("/trips", controllers.searchKeyword);

module.exports = router;
