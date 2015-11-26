'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ServerDefault = ServerDefault;
exports.ClientDefault = ClientDefault;
exports.Make = Make;

var _redux = require('redux');

var _reduxThunk = require('redux-thunk');

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _reduxDevtools = require('redux-devtools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function ServerDefault(reducer, initialState, hasDevTool) {
    var storeComponents = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];
    if (hasDevTool) {
        storeComponents = storeComponents.concat([(0, _reduxDevtools.devTools)()]);
    }
    return Make.apply(undefined, [reducer, initialState].concat(_toConsumableArray(storeComponents)));
}
function ClientDefault(reducer, initialState, hasDevTool) {
    var storeComponents = [(0, _redux.applyMiddleware)(_reduxThunk2.default)];
    if (hasDevTool) {
        storeComponents = storeComponents.concat([(0, _reduxDevtools.devTools)(), (0, _reduxDevtools.persistState)(window.location.href.match(/[?&]debug_session=([^&]+)\b/))]);
    }
    return Make.apply(undefined, [reducer, initialState].concat(_toConsumableArray(storeComponents)));
}
function Make(reducer, initialState) {
    for (var _len = arguments.length, storeComponents = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        storeComponents[_key - 2] = arguments[_key];
    }

    var finalCreateStore = _redux.compose.apply(undefined, storeComponents)(_redux.createStore);
    return finalCreateStore(reducer, initialState);
}