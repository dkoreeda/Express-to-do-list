const express = require('express'),
      mustacheExpress = require('mustache-express'),
      bodyParser = require('body-parser'),
      pgp = require('pg-promise')();

const app = express();

const PORT = process.env.PORT || 8080;

app.engine('html', mustacheExpress());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(require('./router'));

app.listen(PORT, () => console.log('Server is listening on port', PORT));
