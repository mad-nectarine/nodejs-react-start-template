'use strict';

var _react = require('react');

var React = _interopRequireWildcard(_react);

var _reactDom = require('react-dom');

var ReactDom = _interopRequireWildcard(_reactDom);

var _ReduxProviderLayout = require('../components/layouts/ReduxProviderLayout');

var _ReduxProviderLayout2 = _interopRequireDefault(_ReduxProviderLayout);

var _IndexApp = require('../apps/IndexApp');

var _IndexApp2 = _interopRequireDefault(_IndexApp);

var _IndexReducer = require('../reducers/IndexReducer');

var _IndexReducer2 = _interopRequireDefault(_IndexReducer);

var _StoreFactory = require('../util/StoreFactory');

var StoreFactory = _interopRequireWildcard(_StoreFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//get node and parameter
var rootElement = document.getElementById("root");
var initialState = JSON.parse(rootElement.getAttribute("data-initialstate"));
var isDevelopment = rootElement.getAttribute("data-dev") == "true";
//create store
var store = StoreFactory.ClientDefault(_IndexReducer2.default, initialState, isDevelopment);
//render contents
var contents = React.createElement(_ReduxProviderLayout2.default, { "store": store, "hasDevTool": isDevelopment }, React.createElement(_IndexApp2.default, { "title": document.title }));
ReactDom.render(contents, rootElement);