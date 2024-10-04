const asyncHandler = require("express-async-handler")
const slugify = require("slugify")
const sharp = require("sharp");
const bcrypt = require("bcrypt")
const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
const ApiError = require("../utils/apiError")
const User = require("../models/userModel");
const { uploadImgMiddleware } = require("../middlewares/uploadImgMiddleware");


exports.uploadProfileImg = uploadImgMiddleware("profileImg")


// image processing
exports.resizeImage = asyncHandler(async(req, res, next)=>{
    if(req.file){
      const filename = `user-${uuidv4()}-${Date.now()}.jpeg`
      const img = await sharp(req.file.buffer).resize(100, 100).jpeg({quality: 90}).toFile(`uploads/users/${filename}`)
      if(!img)
        next(new ApiError("Error", 400))
      else
      req.body.profileImg = filename
    }
    next()  
})


exports.signup = asyncHandler(async (req, res, next)=>{
    req.body.slug = slugify(req.body.fullName)

    //1) check if userEmail exist  before
    const userEmail = await User.findOne({email: req.body.email})
    if(userEmail)
    return next(new ApiError("email is exsite before", 400))

    const user = await User.create(req.body)
    // Generate token
    const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY)

    res.status(201).json({data: user, token})
})

exports.signin = asyncHandler(async(req, res, next)=>{
  const {email, password} = req.body
  const user = await User.findOne({email})
  if(!user ||  !(await bcrypt.compare(password, user.password))){
    return next(new ApiError("invalid email or password", 400))
  }
  //generate token
  const token = jwt.sign({userId: user._id}, process.env.SECRET_KEY)
  res.status(200).json({data: user, token})
})

exports.protect = asyncHandler(async (req, res, next)=>{
  // 1) get token form req.headers
  let token;
  if(req.headers.authorization){
    token = req.headers.authorization.split(" ")[1]
  }
  if(!token){
    return next(new ApiError("You are not logged, please login", 401))
  }
  //2) verify token
  const decoded = jwt.verify(token, process.env.SECRET_KEY)
  //3) check if user exist
  const user = await User.findById(decoded.userId)
  if(!user)
    return next(new ApiError(`user with this token not exist`, 401))
  next()
})

exports.getLoggedUser = asyncHandler(async (req, res, next)=>{
  let token;
  if(req.headers.authorization){
    //1) get logged user token
    token = req.headers.authorization.split(" ")[1]
  }
  //2) verfiy token
  const decoded = jwt.verify(token, process.env.SECRET_KEY)
  //3) get logged user data
  const loggedUserData = await User.findById(decoded.userId)
  res.status(200).json({data: loggedUserData})
})