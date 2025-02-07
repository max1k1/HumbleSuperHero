const express = require("express");
const cors = require("cors");
require("dotenv").config();
const superheroesRoute = require("./src/routes/superheroesRoute");

const app = express();

const allowedOrigins = [process.env.FRONTEND_URL || "http://localhost:3000"];
const corsOptions = {
    origin: allowedOrigins,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json());

// Routes
app.use("/superheroes", superheroesRoute);

module.exports = app;
