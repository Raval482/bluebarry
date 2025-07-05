
let user = {}
io.on("connection",(socket)=>{
        console.log("user connection successfully",socket.id)

        socket.on("register",(name)=>{
                user[name] = socket.id
        })

        socket.on("send-message",({name,message})=>{
                console.log(name,message)
                const userData = user[name] 
                if(userData){
                         socket.to(userData).emit("message",message)
                }else{
                        socket.emit("message","You are not authorize")
                }
        })

       

})

