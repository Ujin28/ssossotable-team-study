/** 로그인 화면 **/
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // MARK: 쿠키가 세팅되어 있다면 main으로 라우팅(자동로그인)
    req.cookies.id === undefined ? res.render('index') : res.redirect('/main')
})

module.exports = router;