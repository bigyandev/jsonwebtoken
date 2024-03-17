const express = require("express")
const app = express()
const path = require("path")
const { connectDB} = require("./connection")
const { restrictToLogInOnly } = require("./middleware/userAuth")
const staticRoute = require("./routes/staticRoute")
const userAuth = require("./routes/userAuth")

//connection
connectDB("mongodb://127.0.0.1:27017/userDb")

//middleware
app.set("view engine", "ejs")
app.set("views", path.resolve(__dirname + "/views"))
app.use(express.urlencoded({extended:false}))

//route 
app.use("/", staticRoute)
app.use("/userauth", userAuth)





app.listen(3200)