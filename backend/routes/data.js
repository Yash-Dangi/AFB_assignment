const express = require('express');
const dataModel = require('../db');
const axios  = require('axios');
require('dotenv').config();
const dataRouter = express.Router();
const z = require('zod');
dataRouter.get('/' , (req,res) => {
     res.json({
        msg : "Welcome"
     })
})
dataRouter.post('/api/v1/fetchData' , async (req,res) => {
    // console.log('Fetch Route Reached');
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
// const createBody = z.object({
//       'Circle Name' : z.string().nonempty(),
//       'Delivery' : z.string().nonempty(),
//       'District' : z.string().nonempty(),
//       'Division Name' : z.string().nonempty(),
//       'Office Name' : z.string().nonempty(),
//       'OfficeType' : z.string().nonempty(),
//       'Pincode' : z.string().nonempty(),
//       'Region Name' : z.string().nonempty(),
//       'StateName' : z.string().nonempty()
// });
dataRouter.post('/api/v1/create' , async (req,res) => {
       const body = req.body;
       const newData = new dataModel(body);
       await newData.save(); 
       console.log(newData);
       res.status(200).json({
            Message : "New Element Created Successfully"
       })
    //    return;
})
dataRouter.put('/' , async (req,res) => {
      console.log('Put Request Reached')
      const body = req.body;
      await dataModel.findByIdAndUpdate(body.id , body.data)
      res.json({
        msg : "Updated Successfully"
      })
})
dataRouter.delete('/' , async (req,res) => {
         const id = req.query.id;
         await dataModel.findByIdAndDelete(id);
         res.json({
            msg : "Successfuly Deleted"
         })
})
module.exports = dataRouter