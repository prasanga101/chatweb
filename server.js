const express = require('express')
const app = express()
const http = require('http').createServer(app)




const PORT = process.env.PORT || 3000
http.listen(PORT, ()=>{
    console.log(`LISTENING ON PORT ${PORT}`)
})


app.use(express.static(__dirname + '/PUBLIC'))

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})


//SOCKET
const io = require('socket.io')(http)

io.on('connection' , (socket)=>{
      console.log("Connected")
      socket.on('message',(msg)=>{
        socket.broadcast.emit('message',msg)

      })
})