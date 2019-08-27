import React from 'react';
import Arrow from '../../Icons/Arrow.png';
import Hamburger from '../../Icons/Hamburger Icon.svg';

export default class NavMenuButton extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			hovering: false
		};
	}

	render() {
		const styles = {
			navButton: {
				float: 'left',
				position: 'fixed',
				minHeight: '2.5rem',
				minWidth: '2.5rem',
				maxHeight: '3rem',
				maxWidth: '3rem',
				height: '5vh',
				width: '5vh',
				display: 'flex',
				opacity: 1,
				zIndex: 99,
				margin: '5px 0px 0px 5px'
			},
			open: {
				transform: 'rotate(540deg)',
				transition: 'transform 300ms ease-out'
			},
			close: {
				transform: 'rotate(0deg)',
				transition: 'transform 200ms ease-in'
			},
			hovering: {
				backgroundColor: 'rgba(151, 210, 251, 0.8)',
				boxShadow:
					'0 0px 16px 2px rgba(0,0,0,0.24), 0 0px 50px 5px rgba(0,0,0,0.19)',
				transition:
					'background-color 200ms ease-out, box-shadow 100ms ease-out'
			},
			notHovering: {
				backgroundColor: 'rgba(151, 210, 251, 0.4)',
				transition:
					'background-color 200ms ease-out, box-shadow 100ms ease-out'
			},
			navIcon: {
				display: 'flex',
				cursor: 'pointer',
				border: '0px',
				padding: '.5rem',
				borderRadius: '100%',
				outline: 'none',
				width: '100%',
				height: '100%'
			}
		};

		return (
			<div
				className="navMenu-openDropDown"
				style={
					this.props.navBarOpen
						? { ...styles.navButton, ...styles.open }
						: { ...styles.navButton, ...styles.close }
				}
				onMouseEnter={() => this.setState({ hovering: true })}
				onMouseLeave={() => this.setState({ hovering: false })}
				title={
					this.props.navBarOpen
						? 'Close Navigation'
						: 'Open Navigation'
				}
			>
				<button
					onClick={this.props.handleClick}
					style={
						this.state.hovering || this.props.navBarOpen
							? { ...styles.navIcon, ...styles.hovering }
							: { ...styles.navIcon, ...styles.notHovering }
					}
				>
					{this.props.navBarOpen ? (
						<img
							style={{ opacity: 0.9 }}
							src={Arrow}
							height="100%"
							width="100%"
							alt="close nav bar"
						/>
					) : (
						<img
							style={{ opacity: 0.9 }}
							src={Hamburger}
							height="100%"
							width="100%"
							alt="open nav bar"
						/>
					)}
				</button>
			</div>
		);
	}
}
