const asyncHandler = require("express-async-handler")
const ApiError = require("../utils/apiError")
const User = require("../models/userModel");


exports.getAllUsers = asyncHandler(async (req, res, next)=>{
    const users = await User.find({})
    if(!users)
        return next(new ApiError("Error!"))
    else
        res.status(200).json({results: users.length, data: users})
})