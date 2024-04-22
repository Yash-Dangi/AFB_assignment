const express = require("express");
const dataModel = require("../db");
const axios = require("axios");
require("dotenv").config();
const dataRouter = express.Router();
const z = require("zod");

dataRouter.get("/fetchData", async (req, res) => {
  const id = req.query.id;
  const searchParam = req.query.searchParam;
  const searchInput = req.query.searchInput;
  try {
    const conditions = {};

    let safeinput = searchInput.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    let regex = new RegExp("^" + safeinput, "i");
    if (searchInput !== "") {
      conditions[searchParam] = regex;
    }
    const count = await dataModel.countDocuments(conditions);

    const idMax = Math.ceil(count / 8);

    const response = await dataModel
      .find(conditions)
      .skip((id - 1) * 8)
      .limit(8);
    res.json({
      count,
      idMax,
      tableData: response,
    });
  } catch (err) {
    res.status(400).json({
      error: err,
    });
  }
});
const createBody = z.object({
  "Circle Name": z.string().min(1),
  Delivery: z.string().min(1),
  District: z.string().min(1),
  "Division Name": z.string().min(1),
  "Office Name": z.string().min(1),
  OfficeType: z.string().min(1),
  PinCode: z.string().min(1),
  "Region Name": z.string().min(1),
  StateName: z.string().min(1),
});
dataRouter.post("/create", async (req, res) => {
  
  const body = req.body;
  const response = createBody.safeParse(body);
  if (!response.success) {
    res.status(400).json({
      msg: "Send Correct Input",
    });
    return;
  }
  try {
    const newData = new dataModel(body);
    await newData.save();
    res.status(200).json({
      PinCode: newData.PinCode,
      Message: "New Element Created Successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});
dataRouter.put("/update", async (req, res) => {
  
  const body = req.body;
  const response = createBody.safeParse(body.data);
  if (!response.success) {
    res.status(400).json({
      msg: "Send Correct Input",
    });
    return;
  }
  try {
    await dataModel.findByIdAndUpdate(body.id, body.data);
    res.json({
      msg: "Updated Successfully",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});
dataRouter.delete("/delete", async (req, res) => {
 
  const id = req.query.id;
  try {
    await dataModel.findByIdAndDelete(id);
    res.json({
      msg: "Successfuly Deleted",
    });
  } catch (err) {
    res.status(500).json({
      error: err,
    });
  }
});
module.exports = dataRouter;
