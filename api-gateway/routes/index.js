const router = require("express").Router();

router.use(`/api/v${process.env.API_VERSION}`, require("./api"));

module.exports = router;
