const cookieConfig = {
    maxAge: 10*60*1000, // 10분
    httpOnly: true,
    path:'/'
}
import {Request, Response} from "express";

const express = require('express');
const router = express.Router();

router.post('/', (req: Request, res: Response, next: any) => {
    try {
        console.log(req.body)
        res.cookie('user_id',req.body.user_id, cookieConfig)
        res.end()
    }
    catch (e) {
        res.end()
    }

});

module.exports = router;
