const express = require('express');
const router = express.Router();

// MARK: route 메소드 사용하여 RESTful api에 대한 간결화된 응답 구현
router.route('/') // MARK: / 루트로 요청 들어올 경우
    // MARK: GET 요청일 시 index에서 라우팅되는 자동로그인
    .get((req, res) => {
        req.cookies.id === undefined ? res.redirect('/') : res.render('main',{id: req.cookies.id})
    })
    // MARK: POST 요청일 시 로그인 정보를 담은 최초 로그인을 의미함
    .post((req, res) =>{
        res.cookie('id', req.body.id, {
            maxAge: 60*60*1000,
            httpOnly: true,
            path:'/'
        });
        res.writeHead(200)
        res.end('response 200')
    })

module.exports = router;