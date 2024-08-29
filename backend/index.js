const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const ConnectDb = require("./config/db.js")

//routes Path
const authRoutes = require("./routes/authRoutes.js")
const openaiRoutes = require("./routes/openaiRoutes.js")

//dotenv config
dotenv.config();

//mongodb
ConnectDb();
//rest object
const app = express();

//middlewares
app.use(morgan('dev'))
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))

//API Routes
app.use('/api/v1/auth', authRoutes)
app.use("/api/v1/openai", openaiRoutes);

app.listen(3000, (req, res) => {
    console.log("Port is successfully running on 3000");
})