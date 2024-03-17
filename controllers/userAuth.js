const User = require("../models/userAuth")
const {v4 : uuidv4} = require("uuid")
const { setUser } = require("../utilities/userAuth")
//static controller 

async function handleLogIn(req,res) {
  res.render("login")
}

async function handleSignUp(req,res) {
    res.render("signup")
}

async function handleHomePage(req,res) {
    res.render("home")
}

//backend 

async function handleCreateUser(req,res) {
  const {name,email,password} = req.body
  await User.create({
    name,
    email,
    password
  })
  res.redirect("/login")
}

async function handleRegisteredUser(req,res) {
    const {email,password} = req.body
    const user = await User.findOne({email,password})
    if(!user) return res.redirect("/login")
    const token = setUser(user)
    res.cookie("uid", token)
    res.redirect("/")
}


module.exports = {
    handleLogIn,
    handleSignUp,
    handleHomePage,
    handleCreateUser,
    handleRegisteredUser
}