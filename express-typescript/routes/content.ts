import {Request, Response} from "express";

const express = require('express');
const router = express.Router();

enum Title {
    POTATO = '감자',
    APPLE = '사과',
    TOFU = '두부'
}

/* GET home page. */
router.get('/:path', (req: Request, res: Response, next: any) => {
    const path: String = req.params.path
    const title: String = path === 'potato' ? Title.POTATO : ( path === 'apple' ? Title.APPLE : Title.TOFU )
    req.cookies.user_id === undefined ? res.redirect('/index') : res.render('content', {title: `소소식탁 - ${title}`, 'path': path, desc: title})
});

module.exports = router;
