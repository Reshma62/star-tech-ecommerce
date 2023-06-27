require("dotenv").config();
const express = require("express");
const databaseConnection = require( "./db/bdConnect" );
const app = express();
const routes = require( "./routes" )
app.use(express.json())
databaseConnection()
app.use( routes )


app.listen(8000, () => {
  console.log("server is running ");
});
