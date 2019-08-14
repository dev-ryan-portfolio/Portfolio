import React from 'react';

export default class NavMenu extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const styles = {
			navMenu: {
				display: 'block',
				zIndex: 1,
				backgroundColor: 'rgba(145, 219, 234, 1)',
				textAlign: 'center',
				wordWrap: 'break-word',
				overflow: 'hidden'
			},
			navMenuOpen: {
				maxWidth:'20rem',
				minWidth: '10rem',
				width: '15vw',
				transition: 'width 200ms ease-out,max-width 200ms ease-out,min-width 200ms ease-out'
			},
			navMenuClosed: {
				maxWidth:'0rem',
				minWidth: '0rem',
				width: '0px',
				transition: 'width 300ms ease-in,max-width 300ms ease-in,min-width 300ms ease-in'
			},
			children:{
				width: '100%',
				whiteSpace: 'pre',
				fontSize: '1.5em'
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
				<p style={styles.children}>Hello</p>
				<p style={styles.children}>Cameron</p>
				<p style={styles.children}>"The Nose"</p>
				<p style={styles.children}>BeExtra</p>
			</div>
		);
	}
}
