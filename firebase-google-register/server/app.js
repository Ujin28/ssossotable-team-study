const PORT=3000
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const mysql=require('mysql2/promise')
let connection=null

const crypto = require('crypto');

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
// parse application/json
app.use(express.json())

const CLIENT_ID='1:238165722319:android:428b8992460761a55063ba'

const {OAuth2Client} = require('google-auth-library');
const client = new OAuth2Client(CLIENT_ID);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect',()=>{
        console.log('socket disconnected')
    })
    socket.on('signin',async msg=>{
        const hash=crypto.createHash('sha512').update(msg).digest('base64')
        const query='select * from user where userid=?'
        const v=await connection.query(query,[hash])
        let returnValue={}
        if(v[0].length==0) {
            returnValue.success=false
        }
        else {
            returnValue.success=true
        }
        socket.emit("signin",returnValue)
    })
    socket.on('signup',async msg=>{
        const hash=crypto.createHash('sha512').update(msg).digest('base64')
        const query='select * from user where userid=?'
        const v=await connection.query(query,[hash])
        let returnValue={}
        if(v[0].length==0) {
            const query2='insert into user(userid) values(?)'
            await connection.query(query2,[hash])
            returnValue.success=true
        } else {
            returnValue.success=false
        }
        socket.emit('signup',returnValue)
    })
});

server.listen(PORT, async () => {
    connection=await mysql.createPool({
        host: '18.117.84.165',
        port: '3306',
        user: 'ssossotable',
        password: 'mysql7968!',
        database: 'ssossotable_food'
    })
    console.log('listening on *:3000');
});