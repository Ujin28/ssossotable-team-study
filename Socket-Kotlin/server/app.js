/**기본 HTTP 서버 모듈**/
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

/**소켓 통신 모듈**/
const { Server } = require("socket.io");
const io = new Server(server);

/**sql 연동 모듈**/
const mysql=require('mysql2/promise') // mysql2/promise를 사용해야 비동기 작업이 가능하다
let connection=null

/**서버 포트(3000번)**/
const PORT=process.env.PORT||3000

/**기본 index페이지 라우팅**/
// 서버가 정상 동작하는지 확인하기 위해 존재
app.get('/', (req, res) => {
    res.send('index page');
});

/**소켓 통신**/
io.on('connection', async (socket) => { // async키워드는 해당 콜백을 비동기로 처리하겠다는 것을 의미함
    console.log('socket connected');
    socket.on('disconnect',()=>{
        console.log('socket disconnected')
    })
    /**event on**/
    socket.on('auth message',async (msg)=>{ // 클라이언트에서 auth message라는 이벤트가 발생한다면 캐치한다
        let returnValue={}
        const query='select * from user where userid=?'
        // await키워드를 통해 비동기 실행
        const v=await connection.query(query,[msg.authCode])
        if(v[0].length>0)
            returnValue.success=true
        else
            returnValue.success=false
        /**event emit**/
        io.emit('auth message',returnValue)
    })
});

server.listen(PORT, async () => {
    try {
        // await키워드를 통해 비동기 실행
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