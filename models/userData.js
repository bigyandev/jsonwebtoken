const mongoose = require("mongoose")

const userDataSchema = new mongoose.Schema({
    nickname: {
        type: String
    }
})

const userData = mongoose.model("userData", userDataSchema)
module.exports = userData