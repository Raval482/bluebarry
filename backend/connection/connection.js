
const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/d")
.then(()=>console.log("Database Connection Successfully"))
.catch((error)=>console.log(error))


