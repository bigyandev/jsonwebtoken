const express = require("express")
const app = express()
const router = express.Router()
const {handleLogIn, handleSignUp,handleHomePage, handleAdminPage} = require("../controllers/userAuth")
const { restrictTo } = require("../middleware/userAuth")
const User = require("../models/userAuth")

router.get("/login", handleLogIn)
router.get("/signup", handleSignUp)
router.get("/", handleHomePage)
router.get("/admin", restrictTo(["ADMIN"]), async(req,res) => {
    res.end("welcome admin")
})
module.exports = router