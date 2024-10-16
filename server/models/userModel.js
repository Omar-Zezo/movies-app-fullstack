const mongoose = require("mongoose")
const bcrypt = require("bcrypt")

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "name is required"],
        minLength: [3, "name must be 3 character or more"],
        maxLength: [30, "name mustn't be more 3 character"],
        trim: true
    },
    profileImg: {
        type: String,
    },
    slug: {
        type: String,
        lowercase: true
    },
    email: {
        type: String,
        required: [true, "email is required"],
        unique: [true, "email must be unique"],
        trim: true
    },
    phoneNumber: {
        type: String,
        required: [true, "phone number is required"],
    },
    password: {
        type: String,
        minLength: [6, "password must be more than 6 character"],
        required: [true, "password is required"],
        trim: true
    },
    wishlist: {
        type: [{}],
        default: []
    },
}, {timestamps: true})

// hashing password
userSchema.pre("save", async function (next){
    this.password = await bcrypt.hash(this.password, 12)
    next()
})

const User = mongoose.model("user", userSchema)

module.exports = User