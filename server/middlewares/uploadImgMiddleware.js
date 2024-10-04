const multer  = require('multer')

//upload profile image
exports.uploadImgMiddleware = (fieldName)=>{
    const storage = multer.memoryStorage()
    const upload = multer({ storage: storage })
    return upload.single(fieldName)
}