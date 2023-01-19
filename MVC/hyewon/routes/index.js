const express = require('express');
const router = express.Router();

// define the home page route
router.route('/:path')
    .get((req, res) => {
        res.render('index', {
            title: `${req.params.path}`
        })
    })
    .post((req, res) => {

    })

module.exports = router;