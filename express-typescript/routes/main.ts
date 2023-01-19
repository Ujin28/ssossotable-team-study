import {Request, Response} from "express";

const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', (req: Request, res: Response, next: any) => {
    req.cookies.user_id === undefined ? res.redirect('/') : res.render('main', {title: '소소식탁 - 메인', 'path': 'main'})
});

module.exports = router;
