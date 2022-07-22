const PORT=3000

const app = require('express')();
const server = require('http').createServer(app);

const {raw} = require("express");
const io = require('socket.io')(server);

let i=0
let interval

function timerCallback() {
    i++
    io.emit('timer start',i)
}

io.sockets.on('connection', async (socket)=>{
    console.log(`Socket connected : ${socket.id}`)
    socket.on('disconnect', () => {
        clearInterval(interval)
        i=0
        console.log(`Socket disconnected : ${socket.id}`)
    })
    socket.on('timer start', ()=>{
        interval=setInterval(timerCallback, 1000);
    })
    socket.on('timer stop',()=>{
        clearInterval(interval)
        i=0
    })
})

app.get('/',(req, res) => {
    res.send('index page')
})

server.listen(PORT, async () => {
    console.log('Socket IO server listening on port',PORT);
})