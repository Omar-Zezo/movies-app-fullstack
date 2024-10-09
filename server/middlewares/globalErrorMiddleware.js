const globalError = (err, req, res, next)=>{
    const statusCode = err.statusCode || 500
    const msg = err.message === "jwt malformed" ? "You are not logged in, Please login" : err.message
    res.status(statusCode).json({
        statusCode,
        status: statusCode.toString().startsWith(4) ? "Fail" : "Error",
        message: msg,
        error: err,
        stack: err.stack
    })
}

module.exports = globalError