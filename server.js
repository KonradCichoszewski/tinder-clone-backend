import express, { response } from 'express';
import mongoose from 'mongoose';

// App Config
const app = express();
const port = process.env.PORT || 8000;

// Middlewares

// DB Config

// API Endpoints
app.get('/', (req, res) => {
    res.status(200).send("Hello!");
});

// Listener
app.listen(port, () => console.log(`Server listening on port: ${port}`));