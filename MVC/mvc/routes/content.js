const express = require('express');
const model = require("../models/model");
const router = express.Router();

router.get('/:page',(req,res) => {
    // MARK: content/{path} 값을 통해 페이지 라우팅
    const page = req.params.page
    Object.keys(model).includes(page) ? res.render('content', { title_img: model[page].title_img, title: model[page].title }) : res.status(404).send('<h1>404 Not Found</h1>')
})

module.exports = router;