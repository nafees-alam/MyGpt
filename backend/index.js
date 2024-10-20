const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const ConnectDb = require("./config/db.js")
const path = require('path');

//routes Path
const authRoutes = require("./routes/authRoutes.js")
const openaiRoutes = require("./routes/openaiRoutes.js")

//dotenv config
dotenv.config();

//mongodb
ConnectDb();
//rest object
const app = express();
const _dirname = path.resolve();

//middlewares
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))

//API Routes
app.use('/api/v1/auth', authRoutes)
app.use("/api/v1/openai", openaiRoutes);

//backend deploy
app.use(express.static(path.join(_dirname, "/client/dist")));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(_dirname, "client", "dist", "index.html"));
})


app.listen(3000, (req, res) => {
    console.log("Port is successfully running on 3000");
})