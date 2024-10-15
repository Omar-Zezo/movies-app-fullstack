const mongoose = require("mongoose")

const dbConnection = ()=>{
    mongoose.connect(process.env.DB_URI).then(()=>{
        console.log("database connected")
    }).catch((err)=>{
        console.log(err)
    })
}

module.exports = dbConnection