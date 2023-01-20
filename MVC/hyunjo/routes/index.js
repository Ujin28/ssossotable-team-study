const express = require('express');
const router = express.Router();

router.route('/:path')
    .get((req, res) => {
        res.render('index', { title: `${req.params.path}` })
    })
    .post((req, res) => {

    })


module.exports = router;