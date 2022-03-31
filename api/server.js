const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require('dotenv').config()
const app = express();
const router = require("./routes");

app.use(cors());

app.use(express.json());

mongoose.connect(
    process.env.DB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(router);

const port = process.env.API_PORT || 8000

app.listen(port, () => { console.log(`Listening on port ${port}...`)});