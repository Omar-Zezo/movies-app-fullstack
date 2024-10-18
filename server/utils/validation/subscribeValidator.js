const {check}  = require("express-validator") 
const validatorMiddleware = require("../../middlewares/validatorMiddleware")

exports.newSubscriptionValidator = [
    check("email").notEmpty().withMessage("Email is required").isEmail().withMessage("invalid email"),
    validatorMiddleware
] 