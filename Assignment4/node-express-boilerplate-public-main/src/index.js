const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const response = {
    checkValue : {
        status: "failure",
        message : "Please provide Input"
    },

    invalidInputs : {
        status: "error",
        message : "Invalid datatypes"
    }, 
    underflow : {
        status : "error",
        message: "Underflow"
    },
    overflow :{
        status : "error",
        message: "Overflow"
    }

}
app.get("/", (req, res) => {
    res.send("Hello World");
})



function checkValue (num1, num2) {
    if(num1 == "" || num2 == ""){
        return false;
    }   
    return true;
}

function validateDataType (num1, num2) {
    if(isNaN(num1)  || isNaN(num2) ){   
        return false;
    }
    return true;
}

app.post("/add", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    
    if(!checkValue(num1, num2)){
        return res.status(400).json (response.checkValue); 
    }

    if(!validateDataType(num1, num2)){
        return res.status(400).json (response.invalidInputs);
    }

    let result = Number(num1) + Number(num2);
    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000) {
        res.status(400).json(response.underflow);
    
    }
    
    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000) {
        res.status(400).json(response.overflow);
    
    }

    res.status(200).json({
        status : "Sucess",
        message: "the sum of given two numbers",
        sum : result
    })

})

app.post("/sub", (req, res) => {
    
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(!checkValue(num1, num2)){
        return res.status(400).json (response.checkValue); 
    }

    if(!validateDataType(num1, num2)){
        return res.status(400).json (response.invalidInputs);
    }

    let result = Number(num1) - Number(num2);
    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000) {
        res.status(400).json(response.underflow);
    
    }
    
    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000) {
        res.status(400).json(response.overflow);
    
    }

    res.status(200).json({
        status : "Sucess",
        message: "the difference of given two numbers",
        difference : result
    })
})

app.post("/multiply", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(!checkValue(num1, num2)){
        return res.status(400).json (response.checkValue); 
    }

    if(!validateDataType(num1, num2)){
        return res.status(400).json (response.invalidInputs);
    }

    let result = Number(num1) * Number(num2);
    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000) {
        res.status(400).json(response.underflow);
    
    }
    
    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000) {
        res.status(400).json(response.overflow);
    
    }

    res.status(200).json({
        status : "Sucess",
        message: "The product of given numbers",
        result : result
    })
})

app.post("/divide", (req, res) => {
    let num1 = req.body.num1;
    let num2 = req.body.num2;

    if(!checkValue(num1, num2)){
        return res.status(400).json (response.checkValue); 
    }

    if(!validateDataType(num1, num2)){
        return res.status(400).json (response.invalidInputs);
    }

    if(Number(num2) == 0) {
        return res.status(400).json ({
            status: "error",
            message : "Cannot divide by zero"
        }) 
    }

    let result = Number(num1)/Number(num2);

    if(Number(num1) < -1000000 || Number(num2) < -1000000 || result < -1000000) {
        res.status(400).json(response.underflow);
    
    }
    
    if(Number(num1) > 1000000 || Number(num2) > 1000000 || result > 1000000) {
        res.status(400).json(response.overflow);
    
    }
    res.status(200).json({
        status : "Sucess",
        message: "The division of given numbers",
        result : result
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;