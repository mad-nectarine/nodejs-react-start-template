'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactRedux = require('react-redux');

var _react2 = require('redux-devtools/lib/react');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReduxProviderLayout = (function (_React$Component) {
    _inherits(ReduxProviderLayout, _React$Component);

    function ReduxProviderLayout() {
        _classCallCheck(this, ReduxProviderLayout);

        return _possibleConstructorReturn(this, Object.getPrototypeOf(ReduxProviderLayout).apply(this, arguments));
    }

    _createClass(ReduxProviderLayout, [{
        key: 'render',
        value: function render() {
            var debug = null;
            if (this.props.hasDevTool) {
                debug = React.createElement(_react2.DebugPanel, { "top": true, "right": true, "bottom": true }, React.createElement(_react2.DevTools, { "store": this.props.store, "monitor": _react2.LogMonitor }));
            }
            return React.createElement("div", null, React.createElement(_reactRedux.Provider, { "store": this.props.store }, this.props.children), debug);
        }
    }]);

    return ReduxProviderLayout;
})(React.Component);

exports.default = ReduxProviderLayout;

module.exports = ReduxProviderLayout;