import React from 'react';
import buz from '../../Icons/bzzzz.jpg';

export default class Home extends React.Component {
	constructor(props) {
		super(props);

		this.state = {};
	}

	render() {
		return (
			<div className="home-page" style={{ textAlign: 'center' }}>
				<img src={buz} alt="big picture" />
			</div>
		);
	}
}
