const express = require("express");
const router = express.Router();

// different model routers
router.use('/sauces', require('./sauces'));

module.exports = router;
