/**express 서버 구축 구문**/
const express = require('express')
const app = express()
// 포트 지정
// env: 프로세스 환경변수
// 존재한다면 해당 값, 아니라면 3000번 포트로 지정
const port = process.env.PORT||3000

/**라우팅**/
// 루트 경료(/)에서의 get요청이 들어왔을 경우의 라우팅
app.get('/', (req, res) => {
    res.send('Hello World!')
})

/**서버 실행**/
app.listen(port, () => {
    console.log(`sample app listening on port ${port}`)
})
