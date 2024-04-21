const mongoose = require('mongoose');

const db = async () => {
     await mongoose.connect('mongodb+srv://yashdangijaora:Js4e1pkU2E9v3zAN@cluster0.el66e3l.mongodb.net/postalCodeApp');
}

db();

const dataSchema= new mongoose.Schema({
     'Circle Name': String,
     'Delivery' : String,
     'District' : String,
     'Division Name' : String,
     'Office Name' : String,
     'OfficeType' : String,
     'Pincode' : String,
     'Region Name' : String,
     'StateName' : String
});

const dataModel = mongoose.model('dataModel' , dataSchema , 'dataTable');


module.exports  = dataModel;