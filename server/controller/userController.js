const asyncHandler = require("express-async-handler")
const jwt = require('jsonwebtoken');

const ApiError = require("../utils/apiError")
const User = require("../models/userModel");


exports.getAllUsers = asyncHandler(async (req, res, next)=>{
    const users = await User.find({})
    if(!users)
        return next(new ApiError("Error!"))
    else
        res.status(200).json({results: users.length, data: users})
})


exports.addToWishlist = asyncHandler(async (req, res, next)=>{
    let token;
    if(req.headers){
        token = req.headers.authorization.split(" ")[1]
    }
    //1) verify token
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    //2) get logged user wishlist
    const user = await User.findById(decoded.userId)
    let userWishList = user.wishlist
    let wishListMoviesId = user.wishlist.map(item=> item.id)
    //3) check if movie exist and add to wishlist if not exist
    if(wishListMoviesId.includes(req.body.id))
    return next(new ApiError("Movie already exist", 400))
    userWishList.unshift(req.body)
    const updatedUser = await User.findOneAndUpdate({_id: decoded.userId}, {wishlist: userWishList}, {new: true})
    res.status(200).json({data: updatedUser})
})

exports.removeFromWishlist = asyncHandler(async (req, res, next)=>{
    let token;
    if(req.headers){
        token = req.headers.authorization.split(" ")[1]
    }
    //1) verify token
    const decoded = jwt.verify(token, process.env.SECRET_KEY)
    //2) get logged user wishlist
    const user = await User.findById(decoded.userId)
    let userWishList = user.wishlist
    //3) remove movie and update wishlist
    let filteredList = userWishList.filter(item=> item.id != req.body.id)
    const updatedUser = await User.findOneAndUpdate({_id: decoded.userId}, {wishlist: filteredList}, {new: true})
    res.status(200).json({data: updatedUser})
})