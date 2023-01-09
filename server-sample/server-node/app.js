// 환경변수 사용
require("dotenv").config();

const express = require('express')
const path = require("path");
const app = express()
const port = process.env.PORT || 3000
const fs = require('fs/promises')

// data model
const model = require('./public/model/test')

// ejs를 통한 mvc 모델 구현
app.set('view engine', 'ejs'); //view engine이 사용할 Template Engine
app.set('views', path.join(__dirname, 'views')); // Template가 있는 디렉토리

// public 폴더에 대한 보안 해제(사용가능)
app.use(express.static('public'));

// post 데이터 인코딩
app.use(express.json());
app.use(express.urlencoded( {extended : true } ));

// index 페이지 라우팅
app.get('/', function (req, res) {
    res.render('index');
})

// test 페이지 라우팅
app.route('/test/:page')
    .get((req, res) => {
        switch (parseInt(req.params.page)) {
            case 1:
                res.render('test', {
                    image: model._1.image,
                    _a1: model._1._a1,
                    _a2: model._1._a2,
                    _a3: model._1._a3,
                    next: model._1.next
                })
                break
            // 비정상 접근
            // index로 redirect
            case 2:
                res.status(202).redirect('/')
                break
            case 3:
                res.status(202).redirect('/')
                break
        }
    })
    .post((req, res) => {
        switch (parseInt(req.params.page)) {
            // 비정상 접근
            // index로 redirect
            case 1:
                res.status(202).redirect('/')
                break
            case 2:
                if(parseInt(req.body.answer) === parseInt(model._1.answer)) model._1.result = 1
                res.render('test', {
                    image: model._2.image,
                    _a1: model._2._a1,
                    _a2: model._2._a2,
                    _a3: model._2._a3,
                    next: model._2.next
                })
                break
            case 3:
                if(parseInt(req.body.answer) === parseInt(model._2.answer)) model._2.result = 1
                res.render('test', {
                    image: model._3.image,
                    _a1: model._3._a1,
                    _a2: model._3._a2,
                    _a3: model._3._a3,
                    next: model._3.next
                })
                break
        }
    })

// 결과 페이지 라우팅
app.route('/result')
    .post((req, res) => {
        if(parseInt(req.body.answer) === parseInt(model._3.answer)) model._3.result = 1
        res.render('result', {
            _a1: model._1.result,
            _a2: model._2.result,
            _a3: model._3.result
        })
    })
    // 비정상 접근
    // index로 redirect
    .get((req, res) => {
        res.status(202).redirect('/')
    })

// 이미지 라우팅
app.get('/img/:src', async (req,res) => {
    res.end(await fs.readFile(__dirname + 'public/img/' + req.params.src))
})
// css 라우팅
app.get('/css/:src', async (req,res) => {
    res.end(await fs.readFile(__dirname + 'public/css/' + req.params.src))
})

// 404 Error Handling
app.use((req, res, next) => {
    res.status(404).render('404')
})

app.listen(port, () => {
    console.log(`node.js app listening on port ${port}`)
})