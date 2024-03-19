const express = require("express")
const app = express()
const path = require("path")
const { connectDB} = require("./connection")
const cookieParser = require("cookie-parser")
const { checkForAuthentication,restrictTo } = require("./middleware/userAuth")
const staticRoute = require("./routes/staticRoute")
const userAuth = require("./routes/userAuth")
const userDataRoute = require("./routes/userData")

//connection
connectDB("mongodb://127.0.0.1:27017/userDb")

//middleware
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname + "/views"))
app.use(express.urlencoded({extended:false}))
app.use(cookieParser())
app.use(checkForAuthentication)

//route 
app.use("/" ,staticRoute)
app.use("/userauth", userAuth)
app.use("/api/data", restrictTo(["NORMAL","ADMIN"]),userDataRoute)





app.listen(3200)