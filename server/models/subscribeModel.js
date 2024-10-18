const mongoose = require("mongoose")


const subscribeSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Email is required"],
        trim: true
    }
})

module.exports = mongoose.model("subscribe", subscribeSchema)