// 환경변수 사용
require("dotenv").config();

const express = require('express')
const path = require("path");
const app = express()
const port = process.env.PORT || 3000
const fs = require('fs/promises')

// data model
const model = require('./model/app_model')

// ejs를 통한 mvc 모델 구현
app.set('view engine', 'ejs'); //view engine이 사용할 Template Engine
app.set('views', path.join(__dirname, 'views')); // Template가 있는 디렉토리

// public 폴더에 대한 보안 해제(사용가능)
app.use(express.static('public'))

// 기본 경로 라우팅
app.get('/', (req, res) => {
    const page = 'index'
    res.render('app', {
        title_img: model[page].title_img,
        title: model[page].title
    });
})
// 페이지 라우팅
app.get('/:page', (req, res) => {
    const page = req.params.page
    Object.keys(model).includes(page) ? res.render('app', { title_img: model[page].title_img, title: model[page].title }) : res.status(404).send('<h1>404 Not Found</h1>')

})
// 이미지 라우팅
app.get('/img/:src', async (req,res) => {
    res.end(await fs.readFile(__dirname + 'public/img/' + req.params.src))
})
// css 라우팅
app.get('/css/:src', async (req,res) => {
    res.end(await fs.readFile(__dirname + 'public/css/' + req.params.src))
})
    
// 서버 구동
app.listen(port, () => {
    console.log(`mvc app listening on port ${port}`)
})
