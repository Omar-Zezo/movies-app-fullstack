const express = require("express")
const { getAllUsers, addToWishlist, removeFromWishlist, updateProfileImg, uploadProfileImg, resizeImage, removeProfileImg } = require("../controller/userController")
const { protect } = require("../controller/authController")

const router = express.Router()

router.route('/users').get(protect, getAllUsers)
router.route('/wishlist').post(protect, addToWishlist).put(protect, removeFromWishlist)
router.route("/profileImg").put(protect, uploadProfileImg, resizeImage, updateProfileImg)
router.route("/profileImg").delete(protect, removeProfileImg)


module.exports = router