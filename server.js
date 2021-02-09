import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cards from './dbCards.js';

// App Config
const app = express();
const port = process.env.PORT || 8000;
const connection_url = `mongodb+srv://admin:08DBVY24WWqA5351@cluster0.g36ab.mongodb.net/tinderdb?retryWrites=true&w=majority`

// Middlewares
app.use(express.json());
app.use(cors());

// DB Config
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})

// API Endpoints
app.get('/', (req, res) => {
    res.status(200).send("Hello!");
});

app.post('/cards', (req, res) => {
    const dbCard = req.body;
    cards.create(dbCard, (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(201).send(data)
        }
    })
})

app.get('/cards', (req, res) => {
    cards.find((err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data)
        }
    })
})

// Listener
app.listen(port, () => console.log(`Server listening on port: ${port}`));