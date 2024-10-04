const globalError = (err, req, res, next)=>{
    const statusCode = err.statusCode || 500
    res.status(statusCode).json({
        statusCode,
        status: statusCode.toString().startsWith(4) ? "Fail" : "Error",
        message: err.message,
        error: err,
        stack: err.stack
    })
}

module.exports = globalError