const userData = require("../models/userData")

async function handleGetAllUserData(req,res) {
  const results = await userData.find({})
   return res.render("home", {
    data: results
  })
  
}

async function handlePostUserData(req,res) {
    const {nickname} = req.body;
    await userData.create({
       nickname
    })
    const results = await userData.find({})
    return res.render("home", {
        data: results
    })
}

module.exports = {
    handleGetAllUserData,
    handlePostUserData
}