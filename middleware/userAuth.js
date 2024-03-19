const { getUser } = require("../utilities/userAuth");

async function checkForAuthentication(req,res,next) {
  const tokenCookie = req.cookies?.uid;
  req.user = null
  if(!tokenCookie) return next()
  const token = tokenCookie
  try {
    const user = await getUser(token)
    req.user = user;
    return next()
  }
  catch(err) {
    return next(err)
  }
  
  
}

function restrictTo(role = []) {
  return function(req,res,next) {
    if(!req.user) return res.redirect("/login")
    if(!role.includes(req.user.role)) return res.end("unauthorized")
    return next()
  
  }
}

module.exports = {
   checkForAuthentication,
   restrictTo
}