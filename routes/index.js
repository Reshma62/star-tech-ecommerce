const express = require("express");
const _ = express.Router();
const apiRoutes = require("./api")
const base_url = process.env.BASE_URL;
_.use(base_url, apiRoutes) // get for all routes
_.use(base_url, (req, res) => {
  res.send({ error: "Api routes not found" }); 
});

module.exports = _;
