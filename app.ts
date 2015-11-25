var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var uuid = require('node-uuid');
import routesConfig from './src/config/routes.config';

var app = express();

//===== view engine setup =====
app.set('views', __dirname + '/src/view_endpoints');
app.set('view engine', 'js');
app.engine('js', require('express-react-views').createEngine());
//** tsc compile *.tsx to *.jsx when jsx option is "preserve" in tsconfig.json.
//app.set('view engine', 'jsx');
//app.engine('jsx', require('express-react-views').createEngine());

//===== set middleware =====
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    genid: function(req) {
        return uuid.v1() // use UUIDs for session IDs
    },
    secret: 'secret.key',
    saveUninitialized: false,
    //cookie: { secure: true },
    resave: false
}));
app.use(express.static(path.join(__dirname, 'public')));

//===== set routes =====
routesConfig(app);

// catch 404 and forward to error handler
app.use((req, res, next) => {
    var err: any = new Error('Not Found');
    err.status = 404;
    next(err);
});

//===== error handlers =====
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use((err: any, req, res, next: Function): any => {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use((err: any, req, res, next: Function): any => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});
module.exports = app;
