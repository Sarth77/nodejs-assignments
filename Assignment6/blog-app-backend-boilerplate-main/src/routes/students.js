const express = require("express");
const Student = require("../models/Student");
const bodyparser = require("body-parser");
const router = express.Router();

router.use(bodyparser());
router.get("/", async (req, res) => {
    try{
        const students = await Student.find();
        res.status(200).json({
            status: "success",
            students 
        })
    }catch(e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});
router.get("/:id", async (req, res) => {
    try{
        const students = await Student.find({_id: req.params.id});
        res.status(200).json({
            status: "success",
            students 
        })
    }catch(e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});
router.post("/", async (req, res) => {
    try{
        console.log(req.body);
        const students = await Student.create(req.body);
        res.status(200).json({
            status: "success",
            students 
        })
    }catch(e) {
        res.status(400).json({
            status: "failed",
            message: e.message
        })
    }
});

router.put("/:id", async (req, res) => {
    try{
        console.log(req.body);
        const students = await Student.updateOne({_id: req.params.id}, req.body);
        res.status(200).json({
            status: "success",
            students 
        })
    }catch(e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
})
router.delete("/:id", async (req, res) => {
    try{
        console.log(req.body);
        const students = await Student.deleteOne({_id: req.params.id});
        res.status(200).json({
            status: "success",
            students 
        })
    }catch(e) {
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
})

module.exports= router;