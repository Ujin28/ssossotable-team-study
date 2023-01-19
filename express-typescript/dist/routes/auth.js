"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cookieConfig = {
    maxAge: 10 * 60 * 1000,
    httpOnly: true,
    path: '/'
};
const express = require('express');
const router = express.Router();
router.post('/', (req, res, next) => {
    try {
        console.log(req.body);
        res.cookie('user_id', req.body.user_id, cookieConfig);
        res.end();
    }
    catch (e) {
        res.end();
    }
});
module.exports = router;
