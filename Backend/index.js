const express = require('express');
const mongoose = require('mongoose');
const app = express();
const url = require('./Configure/configure');
const port = 3000;
const cors = require('cors');
const userRoutes = require('./Router/userDataRoute');

app.use(express.json());
app.use('/', userRoutes);
app.use(cors());
mongoose.connect(url)
    .then(() => {
        console.log('MongoDB connected');
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });
    })


.catch((err) => {
    console.error('MongoDB connection error:', err);
});