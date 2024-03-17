const express = require("express")
const { handleCreateUser, handleRegisteredUser } = require("../controllers/userAuth")
const router = express.Router()

router.post("/signup", handleCreateUser)
router.post("/login", handleRegisteredUser)

module.exports = router