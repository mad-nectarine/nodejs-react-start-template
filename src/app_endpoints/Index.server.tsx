import * as React from 'react';
import * as ReactDom from 'react-dom/server';
import ReduxFullPageLayout from '../components/layouts/ReduxFullPageLayout'
import App from '../apps/IndexApp'
import { Reducer, CreateStateData } from  '../reducers/IndexReducer'

export interface TodoProps {
	title: string
}

export default class Index extends React.Component<TodoProps, any>
{
	render() {
		let initState = CreateStateData({
			message: {
				text: "initial message",
				type: "info"
			}
		});
		 
		return (
		<ReduxFullPageLayout
			title={this.props.title}
			pageName="index"
			reducer={Reducer}
			initialState={initState}>
			<App title={this.props.title} />
			</ReduxFullPageLayout>);
	}
}

module.exports = Index;