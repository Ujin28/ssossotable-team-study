const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    // MARK: 쿠키 지속시간을 음수로 지정(쿠키 삭제와 같음)
    res.cookie('id', req.body.id, {
        maxAge: -1,
        httpOnly: true,
        path:'/'
    })
    // MARK: 인덱스 페이지로 리다이렉션
    res.redirect('/')
})

module.exports = router;