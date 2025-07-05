require("./connection/connection")
const express = require('express');
const http = require('http');
const Socket = require('socket.io');
const path = require('path');
const cors = require("cors");
const User_Route = require('./routes/UserRoute');
const ChatRoute = require("./routes/ChatRoute");

const app = express();
const server = http.createServer(app);
const io = Socket(server);

global.io = io
require("./controller/SocketController")

app.use(express.static(path.join(__dirname)));
app.use(cors({origin:"*"}))
app.use("/",User_Route)
app.use("/",ChatRoute)


server.listen(4000, () => {
  console.log('🚀 Server is running at http://localhost:4000');
});
