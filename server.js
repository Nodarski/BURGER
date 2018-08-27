require('dotenv').config()
var routes = require('./controllers/burger_controller');
var parser = require('body-parser');
var handlebars  = require('express-handlebars');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.engine('hbs', handlebars({defaultLayout: 'main', extname: '.hbs'}));
app.set('view engine', 'hbs');

app.use(express.static('./public'));

app.use(parser.urlencoded({ extended: true }));
app.use(parser.text());
app.use(parser.json());

app.use('/', routes);

app.listen(port, function() {
    console.log(`Listening on port: ${port}`);
});