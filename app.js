const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const movies = require('./routes/api/movies');
const app = express();

connectDB();
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/movies', movies);
app.listen(3000, () => console.log(`Server running on port 3000`));