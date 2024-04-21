const express = require('express');
const dataRouter = require('./routes/data');
// const axios  = require('axios');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());
app.use('/' , dataRouter);

app.listen(3000 , () => {
    console.log('listening on 3000');
})