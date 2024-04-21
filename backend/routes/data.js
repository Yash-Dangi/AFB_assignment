const express = require('express');
const dataModel = require('../db');
const axios  = require('axios');
require('dotenv').config();
const dataRouter = express.Router();

dataRouter.get('/' , (req,res) => {
     res.json({
        msg : "Welcome"
     })
})
dataRouter.post('/fetch-insert' , async (req,res) => {
    console.log('Fetch Route Reached');
    const id = req.query.id;
    const searchParam = req.body.searchParam;
    const searchInput  = req.body.searchInput;
    const conditions = {};
    // let regex = '';
    let safeinput = searchInput.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, '\\$&') 
    let regex = new RegExp("^" + safeinput, "i");
    if(searchInput !== '')
    {
        conditions[searchParam] = regex;
    }
    console.log(id);
    console.log(searchParam);
    console.log(searchInput);
    const count = await dataModel.countDocuments(conditions);
    console.log(count);
    const idMax = Math.ceil(count /10);
    console.log(idMax);
    const response = await dataModel.find(conditions).skip((id-1)*10).limit(10);
    // console.log(typeof(response));
    // console.log(response); 
    res.json({
        count,
        idMax,
        tableData : response
    })
});

module.exports = dataRouter