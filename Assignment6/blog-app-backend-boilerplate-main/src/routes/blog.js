const Blog = require('../models/Blog')
const express = require("express");
const bodyparser = require("body-parser");
const bcrypt = require("bcrypt");
var jwt = require('jsonwebtoken');
const { body, validationResult } = require('express-validator');
const router = express.Router();

router.use(bodyparser());

router.get('/blog',(req,res)=>{
    res.json({ok:'blog'})
})

router.get("/", async (req, res) => {
    try{
        console.log(req.user);
        const {pagesize = 1} = req.query;
        const posts = await Blog.find({user: req.user}).skip((Number(pagesize)-1)* 10).limit(10);
        res.json({
            status: "Success",
            posts
        })

    }catch(e){
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});

router.post("/", async (req, res) => {
    try{
        const posts = await Blog.create({
            title: req.body.title,
            description: req.body.description,
            user: req.user
        });
        res.json({
            status: "Success",
            posts
        })

    }catch(e){
        res.status(500).json({
            status: "failed",
            message: e.message
        })
    }
});


module.exports = router;