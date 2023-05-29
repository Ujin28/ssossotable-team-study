const CryptoJS = require("crypto-js");

const express = require('express')
const app = express()
const port = 3000

// MARK: cors 허용
const cors = require('cors')
app.use(cors())

// MARK: json데이터 파싱
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// MEMO: id: 'aa', password: 'aa' => token
// MARK: db연동 없이 정적 사용자 정보 사용
const userTable = [{
    userToken: '1132bddeedaa94c5ed1a9b33383cb293a9467a3d29d521bed993a98dd9b8a124',
    nickname: 'aa'
}]

app.post('/', (req, res) => {
    // MARK: json형태로 응답함을 헤더로 명시적 지정
    res.setHeader('content-type', 'application/json')
    // MARK: 전송된 id, password값 기반으로 해싱하여 토큰 생성
    const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, 'secret_key');
    hmac.update(req.body.id);
    hmac.update(req.body.password);
    const token = hmac.finalize().toString();
    let nickname = undefined
    userTable.forEach(e=> {
        // MAKR: 사용자 정보 안에 해당 토큰값이 존재한다면 정보를 읽어옴
        if(token === e.userToken) {
            nickname = e.nickname
        }
    })
    // MARK: 사용자 정보가 없다면
    if(nickname === undefined) {
        res.status(202).json({
            token: null,
            nickname: null
        })
    }
    // MARK: 사용자 정보가 있다면
    else {
        res.status(201).json({
            token: token,
            nickname: nickname
        })
    }
})

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})
