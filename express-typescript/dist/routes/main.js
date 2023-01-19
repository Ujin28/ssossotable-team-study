"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
/* GET home page. */
router.get('/', (req, res, next) => {
    req.cookies.user_id === undefined ? res.redirect('/') : res.render('main', { title: '소소식탁 - 메인', 'path': 'main' });
});
module.exports = router;
