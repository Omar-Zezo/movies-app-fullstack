const express = require("express")
const {newSubscriptionValidator}  = require("../utils/validation/subscribeValidator")
const { userSubscribe } = require("../controller/userController")

const router = express.Router()

router.route("/subscribe").post(newSubscriptionValidator, userSubscribe)

module.exports = router