const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();

const Phone = require("../models/Phone.model")






router.get("/phones", (req, res, next) => {
   Phone.find()
   .then((allPhones) => {
    console.log(allPhones)
    res.json(allPhones)
   }
   

   ).catch((err) => console.log(err))
})

router.get("/phones/:id", (req, res, next) => {
    const {id} = req.params;
    Phone.findById(id)
    .then((singlePhone) => {
        console.log(singlePhone)
        res.json(singlePhone)
    })
    .catch((err) => console.log(err))
})

module.exports = router