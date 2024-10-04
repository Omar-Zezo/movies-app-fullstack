const {check}  = require("express-validator") 
const validatorMiddleware = require("../../middlewares/validatorMiddleware")

exports.signupValidator = [
    check("fullName").notEmpty().withMessage("full name is required")
    .isLength({min: 3})
    .withMessage("name must be 3 character or more")
    .isLength({max: 30})
    .withMessage("name mustn't be more 3 character"),
    check("bio").isLength({max: 300}).withMessage("Bio mustn't be more 300 character"),
    check("email").notEmpty().withMessage("Email is required")
    .isEmail().withMessage("invalid email address"),
    check("password").notEmpty().withMessage("password is required")
    .isLength({min: 6}).withMessage("password must be more than 6 character").custom((val, {req})=>{
        if(req.body.confirmPassword !== val){
            throw new Error("password and password confirmation not match")
        }
        return true
    }),
    check("confirmPassword").notEmpty().withMessage("confirme password is required"),
    validatorMiddleware
]


exports.signinValidator = [
    check("email").notEmpty().withMessage("Email is required")
    .isEmail().withMessage("invalid email address"),
    check("password").notEmpty().withMessage("password is required"),
    validatorMiddleware
]