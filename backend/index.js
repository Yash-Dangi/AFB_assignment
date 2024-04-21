const express = require('express');
const dataRouter = require('./routes/data');
// const axios  = require('axios');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors());
app.use('/api/v1' , dataRouter);

try{
    app.listen(3000 , () => {})
}
catch(err){
    console.log(err); 
}

module.exports = app;