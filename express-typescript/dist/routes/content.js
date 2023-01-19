"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const router = express.Router();
var Title;
(function (Title) {
    Title["POTATO"] = "\uAC10\uC790";
    Title["APPLE"] = "\uC0AC\uACFC";
    Title["TOFU"] = "\uB450\uBD80";
})(Title || (Title = {}));
/* GET home page. */
router.get('/:path', (req, res, next) => {
    const path = req.params.path;
    const title = path === 'potato' ? Title.POTATO : (path === 'apple' ? Title.APPLE : Title.TOFU);
    req.cookies.user_id === undefined ? res.redirect('/index') : res.render('content', { title: `소소식탁 - ${title}`, 'path': path, desc: title });
});
module.exports = router;
