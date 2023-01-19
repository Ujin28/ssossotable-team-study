import {Request, Response} from "express";

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req: Request, res: Response, next: any) => {
  req.cookies.user_id === undefined ? res.render('index', {title: '소소식탁 - 로그인', 'path': 'index'}) : res.redirect('/main')
});

module.exports = router;
