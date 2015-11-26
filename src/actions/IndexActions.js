"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.changeMessage = changeMessage;
//types
var IndexActionTypes = exports.IndexActionTypes = {
    CHANGE_MESSAGE: "INDEX.CHANGE_MESSAGE"
};
//creators
function changeMessage(message) {
    return { type: IndexActionTypes.CHANGE_MESSAGE, message: message };
}
;