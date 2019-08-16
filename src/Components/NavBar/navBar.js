import React from 'react';
import NavMenuButton from './navMenuButton.js';
import NavMenu from './navMenu.js';

export default class NavBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			navBarOpen: false
		};
		this.toggleNavBar = this.toggleNavBar.bind(this);
	}

	toggleNavBar() {
		this.setState({
			navBarOpen: this.state.navBarOpen ? false : true
		});
	}

	render() {
		return (
			<div
				className="navMenu"
				style={{
					zIndex: 99,
					position: 'fixed',
					padding: 0,
					margin: 0,
					userSelect: 'none'
				}}
			>
				<NavMenuButton
					handleClick={this.toggleNavBar}
					navBarOpen={this.state.navBarOpen}
				/>
				<NavMenu
					handleClick={this.toggleNavBar}
					navBarOpen={this.state.navBarOpen}
					handlePageChange={this.props.handlePageChange}
				/>
			</div>
		);
	}
}
