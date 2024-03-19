const express = require("express")
const router = express.Router()
const {handleGetAllUserData, handlePostUserData} = require("../controllers/userData")


router.get("/",handleGetAllUserData)
router.post("/",handlePostUserData)

module.exports = router