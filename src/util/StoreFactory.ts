import { Reducer, Middleware, compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { devTools, persistState } from 'redux-devtools';

export function ServerDefault(reducer: Reducer, initialState: any, hasDevTool: boolean): any {
	let storeComponents = [
		applyMiddleware(thunk)
	];
	if (hasDevTool) {
		storeComponents = storeComponents.concat([
			devTools()
		]);
	}
	return Make(reducer, initialState, ...storeComponents);
}

export function ClientDefault(reducer: Reducer, initialState: any, hasDevTool: boolean): any {
	let storeComponents = [
		applyMiddleware(thunk)
	];
	if (hasDevTool) {
		storeComponents = storeComponents.concat([
			devTools(),
			persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
		]);
	}
	return Make(reducer, initialState, ...storeComponents);
}

export function Make(reducer: Reducer, initialState: any, ...storeComponents: Function[]): any {
	let finalCreateStore = compose(...storeComponents)(createStore);
	return finalCreateStore(reducer, initialState);
} 