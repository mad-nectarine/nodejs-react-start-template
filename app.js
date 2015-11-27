'use strict';

var _path = require('path');

var path = _interopRequireWildcard(_path);

var _bodyParser = require('body-parser');

var bodyParser = _interopRequireWildcard(_bodyParser);

var _nodeUuid = require('node-uuid');

var uuid = _interopRequireWildcard(_nodeUuid);

var _fs = require('fs');

var fs = _interopRequireWildcard(_fs);

var _routesconfig = require('./src/config/routesconfig');

var _routesconfig2 = _interopRequireDefault(_routesconfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//"var hoge required 'hoge'" modules have no export default in ".d.ts"
//I wanna modify to "import hoge from 'hoge'"
var express = require('express');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();
//===== view engine setup =====
app.set('views', __dirname + '/src/app_endpoints');
app.set('view engine', 'server.js');
app.engine('server.js', require('express-react-views').createEngine());
//===== set middleware =====
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));
if (app.get('env') === 'development') {
    app.use(logger('dev'));
} else {
    app.use(logger('common', {
        stream: { write: function write(str) {
                var now = new Date();
                var date = now.toDateString();
                var dirpath = __dirname + "/logs";
                var logpath = dirpath + "/" + date + ".log";
                var callback = function callback(err) {
                    if (err) {
                        return console.log("log output error:" + err);
                    }
                    return console.log(str.slice(0, str.length - 1));
                };
                if (!fs.existsSync(dirpath)) {
                    fs.mkdirSync(dirpath);
                }
                if (fs.existsSync(logpath)) {
                    fs.appendFile(logpath, str, callback);
                } else {
                    fs.writeFile(logpath, str, callback);
                }
            } } }));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    genid: function genid(req) {
        return uuid.v1(); // use UUIDs for session IDs
    },
    secret: 'hoge',
    saveUninitialized: false,
    //cookie: { secure: true },
    resave: false
}));
app.use(express.static(path.join(__dirname, 'public')));
//===== set routes =====
(0, _routesconfig2.default)(app);
//===== error handlers =====
// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            title: "Server Error",
            message: err.message,
            error: err
        });
    });
}
// production error handler
// no stacktraces leaked to user
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        title: "Server Error",
        message: err.message,
        error: {}
    });
});
module.exports = app;