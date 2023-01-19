"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/', (req, res, next) => {
    req.cookies.user_id === undefined ? res.render('index', { title: '소소식탁 - 로그인', 'path': 'index' }) : res.redirect('/main');
});
module.exports = router;
