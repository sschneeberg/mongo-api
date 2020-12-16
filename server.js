require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
    res.send('hello');
});

app.use('/colors', require('./Controller/colorController'));

app.listen(process.env.PORT || 3000, console.log('starting server'));
