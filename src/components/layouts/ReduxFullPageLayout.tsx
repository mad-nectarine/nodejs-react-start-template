import * as React from 'react';
import * as ReactDom from 'react-dom/server';
import { compose, createStore, applyMiddleware,Reducer } from 'redux';
import thunk from 'redux-thunk';
import { devTools, persistState } from 'redux-devtools';
import ReduxProviderLayout from './ReduxProviderLayout';
import * as StoreFactory from '../../util/StoreFactory'; 
export interface ReduxFullPageLayoutProps {
	title: string,
	pageName: string,
	initialState?: any,
	reducer: Reducer,
	children? : React.ReactNode,
}

export default class ReduxFullPageLayout extends React.Component<ReduxFullPageLayoutProps, any>
{
	render() {
	 	let isDevelopment = process.env.NODE_ENV == "development";  
		
		//create store
		let store = StoreFactory.ServerDefault(this.props.reducer, this.props.initialState, isDevelopment);
		
		//create contents html
		let contents = (
			<ReduxProviderLayout store={store} hasDevTool={isDevelopment} >
				{this.props.children}
				</ReduxProviderLayout>);
		let html = ReactDom.renderToString(contents);
		
		//create initial state
		let initialState = store.getState();
		let stateJson = JSON.stringify(initialState);
		
		//script src
		let extensions = isDevelopment ? ".debug.js" : ".min.js";
		let scriptSrc =  "/scripts/apps/" + this.props.pageName + extensions;
		
		//create full page elemements
		return (
		<html>
			<head>
				<title>{this.props.title}</title>
				<link rel="stylesheet" href="/stylesheets/style.css" />
				</head>
			<body>
				<div id="root" dangerouslySetInnerHTML={{ __html: html }} data-initialstate={stateJson} data-dev={isDevelopment}></div>
				<script type="text/javascript" src={scriptSrc} />
				</body>
			</html>);
	}
}

module.exports = ReduxFullPageLayout;