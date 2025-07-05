const express = require("express")
const { sendMessage, getChatBetweenUsers } = require("../controller/ChatController")
const bodyParser = require("body-parser")
const auth = require("../middleware/auth")
const ChatRoute = express()

// ChatRoute.post("/chat",auth,sendMessage)
// ChatRoute.get("/chat/:userId", auth, getChatBetweenUsers);

ChatRoute.post("/chat", sendMessage);  // POST /chat to send message
ChatRoute.get("/chat/:senderId/:receiverId", getChatBetweenUsers);  // GET /chat/:senderId/:receiverId to get messages between users

ChatRoute.use(express.json())
ChatRoute.use(bodyParser.json())
ChatRoute.use(bodyParser.urlencoded({extended:true}))


module.exports = ChatRoute