const path = require("path")
const express = require("express")

require("dotenv").config()
const morgan = require("morgan")
const cors = require('cors')

const userRoute = require("./routes/userRoute")
const authRoute = require("./routes/authRoute")
const subscribeRoute = require("./routes/subscribeRoute")

const dbConnection = require("./config/dbConnection")
const ApiError = require("./utils/apiError")
const globalError = require("./middlewares/globalErrorMiddleware")


const app = express()
const port = process.env.PORT

//database connection
dbConnection()

//Middlewares
app.use(express.json())
app.use(cors())
app.use(express.static(path.join(__dirname, 'uploads')))


//App Routes
app.use("/api", userRoute)
app.use("/api", authRoute)
app.use("/api", subscribeRoute)

app.use(express.static(path.join(__dirname, "views")));
app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "/views/index.html"))
);

app.all("*", (req, res, next)=>{
    return next(new ApiError("This route is not found", 404))
})

// Global Error Middleware
app.use(globalError)


if(process.env.NODE_ENV === "development"){
    app.use(morgan("dev"))
    console.log(`Mode: ${process.env.NODE_ENV}`)
}


const server = app.listen(port, ()=> console.log(`Server Running on Port ${port}`))

// Unhandled Rejection Error 
process.on("unhandledRejection", (err)=>{
    console.log(`Unhandled Rejection Error: ${err}`)
    server.close(()=>{
        process.exit(1)
    })
})