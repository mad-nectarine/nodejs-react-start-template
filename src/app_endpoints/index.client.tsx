import * as React from 'react'
import * as ReactDom from 'react-dom'
import ReduxProviderLayout from '../components/layouts/ReduxProviderLayout';
import App from '../apps/IndexApp'
import Reducer from '../reducers/IndexReducer'
import * as StoreFactory from '../util/StoreFactory'; 

//get node and parameter
let rootElement = document.getElementById("root");
let initialState = JSON.parse(rootElement.getAttribute("data-initialstate"));
let isDevelopment = rootElement.getAttribute("data-dev") == "true";
	 
//create store
let store = StoreFactory.ClientDefault(Reducer,initialState,isDevelopment);

//render contents
let contents = (
	<ReduxProviderLayout store={store} hasDevTool={isDevelopment} >
		<App title={document.title} />
		</ReduxProviderLayout>);
ReactDom.render(contents,rootElement);