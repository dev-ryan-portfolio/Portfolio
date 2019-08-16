import React from 'react';

export default class NavMenu extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const styles = {
			navMenu: {
				display: 'block',
				backgroundColor: 'rgba(145, 219, 234, 1)',
				borderRadius: '1.5em',
				textAlign: 'center',
				wordWrap: 'break-word',
				overflow: 'hidden',
				position: 'fixed',
				zIndex: 98
			},
			navMenuOpen: {
				maxWidth: '12rem',
				minWidth: '10.5rem',
				width: '25vw',
				opacity: 0.94,
				transition:
					'width 200ms ease-out,max-width 200ms ease-out,min-width 200ms ease-out,opacity 200ms ease-out'
			},
			navMenuClosed: {
				maxWidth: '0rem',
				minWidth: '0rem',
				width: '0px',
				opacity: 0,
				transition:
					'width 300ms ease-in,max-width 300ms ease-in,min-width 300ms ease-in,opacity 300ms ease-in'
			},
			children: {
				width: '100%',
				whiteSpace: 'pre',
				fontSize: '1.5em',
				cursor: 'pointer'
			}
		};

		return (
			<div
				style={
					this.props.navBarOpen
						? { ...styles.navMenu, ...styles.navMenuOpen }
						: { ...styles.navMenu, ...styles.navMenuClosed }
				}
			>
				<p
					style={styles.children}
					onClick={() => this.props.handlePageChange('Home')}
				>
					Home
				</p>
				<p
					style={styles.children}
					onClick={() => this.props.handlePageChange('Hangman')}
				>
					Hangman
				</p>
			</div>
		);
	}
}
