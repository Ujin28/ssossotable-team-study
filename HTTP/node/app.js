const express = require('express')
const app = express()
const port = process.env.PORT||3000

const bodyParser = require("body-parser")

// 문자열 파싱
app.use(bodyParser.urlencoded({ extended: true }));
// JSON파싱
//app.use(bodyParser.json())
app.use(express.json())

/**
 * 사용자 정보와 단어 정보를 저장하는 json object
 * 원래는 db서버에서 받아와야 하지만 이번 실습에서는 하드코딩된 정보를 통해 처리해 보세요
 */
const userInfo={
    "id":["test1","test2","test3"],
    "password":["test1","test2","test3"]
}

const wordList={
    'mainword':[
        'ma','mb','mc','md','me','mf','mg','mh','mi','mj'
    ],
    'testword1':[
        't1a','t1b','t1c','t1d','t1e','t1f','t1g','t1h','t1i','t1j'
    ],
    'testword2':[
        't2a','t2b','t2c','t2d','t2e','t2f','t2g','t2h','t2i','t2j'
    ],
    'testword3':[
        't3a','t3b','t3c','t3d','t3e','t3f','t3g','t3h','t3i','t3j'
    ]
}

/**StringRequest 대응**/
app.post('/signin',(req, res)=>{
    if(userInfo.id.includes(req.body.password) && userInfo.id.includes(req.body.id))
        res.send('0')
    else
        res.send('-1')
})

/**JsonObjectRequest 대응**/
// app.post('/signin',(req, res)=>{
//     let resObj=new Object()
//     if(userInfo.id.includes(req.body.id) && userInfo.id.includes(req.body.password))
//         resObj.result='YES'
//     else
//         resObj.result='NO'
//     res.send(resObj);
// })

app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})
