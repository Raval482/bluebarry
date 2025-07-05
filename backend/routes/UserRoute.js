
const express = require("express")
const { Registration, showAllUser, Login, showPerticullerUser} = require("../controller/UserController")
const User_Route = express()
const bodyParser = require("body-parser")
const auth = require("../middleware/auth")




User_Route.use(express.json())
User_Route.use(bodyParser.json())
User_Route.use(bodyParser.urlencoded({extended:true}))

User_Route.post("/registration",Registration)
User_Route.get("/showAllUser", auth,showAllUser)
User_Route.post("/login",Login)
User_Route.get("/showoneuser/:id",auth,showPerticullerUser)



module.exports = User_Route