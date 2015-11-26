'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Reducer = undefined;
exports.CreateStateData = CreateStateData;

var _redux = require('redux');

var Redux = _interopRequireWildcard(_redux);

var _IndexActions = require('../actions/IndexActions');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//reducer
function message() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? null : arguments[0];
    var action = arguments[1];

    switch (action.type) {
        case _IndexActions.IndexActionTypes.CHANGE_MESSAGE:
            return action.message;
        default:
            return state;
    }
}
var Reducer = exports.Reducer = Redux.combineReducers({ message: message });
exports.default = Reducer;
function CreateStateData(data) {
    var state = {
        message: null
    };
    if (data != null) {
        state = Object.assign(state, data);
    }
    return state;
}