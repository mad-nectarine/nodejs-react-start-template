'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRedux = require('react-redux');

var ReactRedux = _interopRequireWildcard(_reactRedux);

var _redux = require('redux');

var Redux = _interopRequireWildcard(_redux);

var _IndexActions = require('../actions/IndexActions');

var ActionCreators = _interopRequireWildcard(_IndexActions);

var _DefaultLayout = require('../components/layouts/DefaultLayout');

var _DefaultLayout2 = _interopRequireDefault(_DefaultLayout);

var _MessageArea = require('../components/views/MessageArea');

var _MessageArea2 = _interopRequireDefault(_MessageArea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndexApp = (function (_React$Component) {
    _inherits(IndexApp, _React$Component);

    function IndexApp() {
        _classCallCheck(this, IndexApp);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(IndexApp).apply(this, arguments));
    }

    _createClass(IndexApp, [{
        key: 'render',
        value: function render() {
            // Injected by connect() call:
            var _props = this.props;
            var message = _props.message;
            var title = _props.title;

            return React.createElement(_DefaultLayout2.default, { "title": title }, React.createElement("section", null, React.createElement("h1", null, "Change Message"), React.createElement("div", { "className": "input-form" }, React.createElement("p", null, React.createElement("label", null, "Message"), React.createElement("input", { "type": "text", "ref": "text" })), React.createElement("p", null, React.createElement("label", null, "Type"), React.createElement("select", { "ref": "type" }, React.createElement("option", { "key": "info", "value": "info" }, "info"), React.createElement("option", { "key": "error", "value": "error" }, "error"))), React.createElement("div", { "className": "operations" }, React.createElement("button", { "onClick": this.handleClick.bind(this) }, "Change")))), React.createElement("section", null, React.createElement("h1", null, "Message"), React.createElement(_MessageArea2.default, { "message": message })));
        }
    }, {
        key: 'handleClick',
        value: function handleClick(e) {
            var text = this.refs["text"];
            var type = this.refs["type"];
            var msg = {
                text: text.value,
                type: type.value
            };
            this.props.changeMessage(msg);
        }
    }]);

    return IndexApp;
})(React.Component);
// Which props do we want to inject, given the global state?
// Note: use https://github.com/faassen/reselect for better performance.

function mapStateToProps(state) {
    return {
        message: state.message
    };
}
function mapDispatchToProps(dispatch) {
    return Redux.bindActionCreators(ActionCreators, dispatch);
}
exports.default = ReactRedux.connect(mapStateToProps, mapDispatchToProps)(IndexApp);