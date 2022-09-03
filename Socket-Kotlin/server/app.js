const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const mysql=require('mysql2/promise')
let connection=null

const PORT=process.env.PORT||3000

app.get('/', (req, res) => {
    res.send('index page');
});

io.on('connection', async (socket) => {
    console.log('socket connected');
    socket.on('disconnect',()=>{
        console.log('socket disconnected')
    })
    socket.on('auth message',async (msg)=>{
        let returnValue={}
        const query='select * from user where userid=?'
        const v=await connection.query(query,[msg.authCode])
        if(v[0].length>0)
            returnValue.success=true
        else
            returnValue.success=false
        io.emit('auth message',returnValue)
    })
});

server.listen(PORT, async () => {
    try {
        connection=await mysql.createPool({
            host: '18.117.84.165',
            port: '3306',
            user: 'ssossotable',
            password: 'mysql7968!',
            database: 'ssossotable_food'
        })
    }
    catch (e) {
        console.error(e)
    }
    finally {
        console.log('listening on',PORT)
    }
});