const mongoose = require("mongoose");

const databaseConnection = () =>
{
mongoose.connect(process.env.MONGODB_URL).then(() => console.log("Connected!"));
};

module.exports = databaseConnection;
