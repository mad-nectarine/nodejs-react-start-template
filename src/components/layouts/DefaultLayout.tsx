import * as React from 'react';

export interface DefaultLayoutProps {
	title?: string,
	children? : React.ReactNode,
}

export default class DefaultLayout extends React.Component<DefaultLayoutProps, any>
{
	render() {
		return (
		<div>
			<header>
				<a href="/" className="title">Redux</a>
				</header>
			<h1>{this.props.title}</h1>
			<div id="content">
				{this.props.children}
				</div>
			</div>
		);
	}
}
module.exports = DefaultLayout;