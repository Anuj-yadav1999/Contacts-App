const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = require('./routes');
const cors = require('cors');

mongoose.connect('mongodb://localhost/book_mart',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use(
    cors({
    origin: 'http://localhost:3000',
    credentials: true
    })
);
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//app.use(bodyParser);

app.use(router);

app.listen(5000, () => console.log(`Server started at port 5000`));