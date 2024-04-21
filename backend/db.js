const mongoose = require('mongoose');
require('dotenv').config();
const db = async () => {
     await mongoose.connect(process.env.DATABASE_URL);
}

db();

const dataSchema= new mongoose.Schema({
     'Circle Name': String,
     'Delivery' : String,
     'District' : String,
     'Division Name' : String,
     'Office Name' : String,
     'OfficeType' : String,
     'PinCode' : String,
     'Region Name' : String,
     'StateName' : String
});

const dataModel = mongoose.model('dataModel' , dataSchema , 'dataTable');


module.exports  = dataModel;