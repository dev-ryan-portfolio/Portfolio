/* eslint-disable no-useless-constructor */
import React from 'react';
import StandardHangman from '../standardHangman/hangman.js';
import PredictiveHangman from '../predictiveHangman/hangman.js';

export default class hangmanSelector extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			gameMode: 'standard'
		};

		this.changeGame = this.changeGame.bind(this);
	}

	changeGame(gameMode) {
		this.setState({
			gameMode: gameMode
		});
	}

	render() {
		const buttons = (
			<div style={{ textAlign: 'center' }}>
				<button style={this.state.gameMode === 'standard' ? {background: 'rgba(145, 219, 234, 1)'} : {}}onClick={() => this.changeGame('standard')}>
					standard
				</button>
				<button style={this.state.gameMode === 'predicitve' ? {background: 'rgba(145, 219, 234, 1)'} : {}} onClick={() => this.changeGame('predicitve')}>
					predicitve
				</button>
			</div>
		);
		return (
			<div>
				{buttons}
				{this.state.gameMode === 'standard' ? (
					<StandardHangman />
				) : this.state.gameMode === 'predicitve' ? (
					<PredictiveHangman />
				) : null}
			</div>
		);
	}
}
