import React from 'react';
import Hangman from '../Hangman/hangmanSelector/hangmanSelector.js';
import NavBar from '../NavBar/navBar.js';
import Home from '../Home/home.js';

export default class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			page: 'Home'
		};

		this.changePage = this.changePage.bind(this);
	}

	changePage(e) {
		this.setState({
			page: e
		});
	}

	render() {
		return (
			<div>
				<NavBar handlePageChange={this.changePage} />
				{this.state.page === 'Hangman' && <Hangman />}
				{this.state.page === 'Home' && <Home />}
			</div>
		);
	}
}
