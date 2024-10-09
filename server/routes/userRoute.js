const express = require("express")
const { getAllUsers, addToWishlist, removeFromWishlist } = require("../controller/userController")
const { protect } = require("../controller/authController")

const router = express.Router()

router.route('/users').get(protect, getAllUsers)
router.route('/wishlist').post(protect, addToWishlist).put(protect, removeFromWishlist)


module.exports = router