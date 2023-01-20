const express = require('express')
const router = express.Router();
const app = express()
const port = process.env.PORT || 3000;
const indexRouter = require('./routes/index')

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


require('dotenv').config();

app.use(indexRouter)

app.get('/', (req, res) => {
    res.render('index');
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


router.get('/message', function(req, res, next) {
    res.send(process.env.MESSAGE);
});

router.get('/number', function(req, res, next) {
    res.send(process.env.NUMBER);
});

module.exports = router;