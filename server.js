const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = 9090

require("dotenv").config();
const app = express();
app.use(cors())
app.use(express.json());
mongoose.connect(process.env.MONGO_DB_URL);
const db = mongoose.connection;



const EventsRoute = require('./ROUTES/EventRoute');
const UserRoute = require('./ROUTES/UserRoute');
const LoginRoute = require('./ROUTES/LoginRoute');


app.use('/', UserRoute);
app.use('/', LoginRoute);
app.use('/', EventsRoute);




db.on("error", console.error.bind("error connecting to database"));
db.once("open", () => { console.log("database connected"); }); 

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
