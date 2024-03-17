const { getUser } = require("../utilities/userAuth");

async function restrictToLogInOnly(req,res,next) {
  const userToken = req.cookies?.uid;
  if(!userToken) return res.redirect("/login")
  const user = await getUser(userToken)
  if(!user) return res.redirect("/login")
  req.user = user
  next()
}

module.exports = {
    restrictToLogInOnly
}