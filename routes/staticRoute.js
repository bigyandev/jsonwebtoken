const express = require("express")
const app = express()
const router = express.Router()
const {handleLogIn, handleSignUp,handleHomePage} = require("../controllers/userAuth")

router.get("/login", handleLogIn)
router.get("/signup", handleSignUp)
router.get("/", handleHomePage)

module.exports = router