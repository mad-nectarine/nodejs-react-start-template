'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _server = require('react-dom/server');

var ReactDom = _interopRequireWildcard(_server);

var _ReduxProviderLayout = require('./ReduxProviderLayout');

var _ReduxProviderLayout2 = _interopRequireDefault(_ReduxProviderLayout);

var _StoreFactory = require('../../util/StoreFactory');

var StoreFactory = _interopRequireWildcard(_StoreFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReduxFullPageLayout = (function (_React$Component) {
    _inherits(ReduxFullPageLayout, _React$Component);

    function ReduxFullPageLayout() {
        _classCallCheck(this, ReduxFullPageLayout);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReduxFullPageLayout).apply(this, arguments));
    }

    _createClass(ReduxFullPageLayout, [{
        key: 'render',
        value: function render() {
            var isDevelopment = process.env.NODE_ENV == "development";
            //create store
            var store = StoreFactory.ServerDefault(this.props.reducer, this.props.initialState, isDevelopment);
            //create contents html
            var contents = React.createElement(_ReduxProviderLayout2.default, { "store": store, "hasDevTool": isDevelopment }, this.props.children);
            var html = ReactDom.renderToString(contents);
            //create initial state
            var initialState = store.getState();
            var stateJson = JSON.stringify(initialState);
            //script src
            var extensions = isDevelopment ? ".debug.js" : ".min.js";
            var scriptSrc = "/scripts/apps/" + this.props.pageName + extensions;
            //create full page elemements
            return React.createElement("html", null, React.createElement("head", null, React.createElement("title", null, this.props.title), React.createElement("link", { "rel": "stylesheet", "href": "/stylesheets/style.css" })), React.createElement("body", null, React.createElement("div", { "id": "root", "dangerouslySetInnerHTML": { __html: html }, "data-initialstate": stateJson, "data-dev": isDevelopment }), React.createElement("script", { "type": "text/javascript", "src": scriptSrc })));
        }
    }]);

    return ReduxFullPageLayout;
})(React.Component);

exports.default = ReduxFullPageLayout;

module.exports = ReduxFullPageLayout;