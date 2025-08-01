
const mongoose = require("mongoose")

const UserSchema = mongoose.Schema({
  name: {
        type: String,

    },
    email: {
        type: String,

    },
    password: {
        type: String,

    },
    address: {
        type: String,

    },
    gender: {
        type: String,

    },
    hobby: {
        type: String,

    }
},
    { timestamps: true }
)

module.exports = mongoose.model("user", UserSchema)