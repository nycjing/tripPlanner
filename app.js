const express = require('express');
const app = express();

const db = require('./models').db;
const nunjucks = require('nunjucks');
const route = require('./route');

app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', { noCache: true });

const morgan = require('morgan');
app.use(morgan('dev'));

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const path = require('path');
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.use(express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));
app.use('/trip',route);

app.get('/', function (req, res, next) {

  res.render('home');
});

app.use(function (err, req, res, next) {
  if(err) console.err(err.message);
  else {
    res.render('error');
  }
});

const PORT = 3000;

db.sync()
.then(() => {
  console.log('db synced!');
  app.listen(PORT, function () {
    console.log(`server listening on port ${PORT}`);
  });
});
