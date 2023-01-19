require("dotenv").config();

const express = require('express')
const app = express()
const port = process.env.PORT || 3000

/** MARK: view engine setting*/
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

/** MARK: post json parsing*/
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/** MARK: public 폴더 보안 해제*/
app.use(express.static('./public'));

const indexRouter = require('./routes/index')
const path = require("path");

app.use(indexRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})