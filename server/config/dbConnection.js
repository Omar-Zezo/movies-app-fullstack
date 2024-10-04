const mongoose = require("mongoose")

const dbConnection = ()=>{
    mongoose.connect("mongodb://0.0.0.0:27017/movies").then(()=>{
        console.log("database connected")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = dbConnection