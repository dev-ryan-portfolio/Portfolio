import React from 'react';

export default function navMenu(props) {
	const styles = {
		navMenu: {
			display: 'block',
			backgroundColor: 'rgba(172, 237, 255, 1)',
			borderRadius: '1.5em',
			textAlign: 'center',
			wordWrap: 'break-word',
			overflow: 'hidden',
			position: 'fixed',
			zIndex: 98
		},
		navMenuOpen: {
			maxWidth: '15rem',
			minWidth: '10.5rem',
			width: '25vw',
			opacity: 0.85,
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
		}
	};

	return (
		<div
			style={
				props.navBarOpen
					? { ...styles.navMenu, ...styles.navMenuOpen }
					: { ...styles.navMenu, ...styles.navMenuClosed }
			}
		>
			<ul style={{ listStyle: 'none', paddingInlineStart: '1rem' }}>
				{props.children.map((item, i) => (
					<li key={i} style={{ margin: '5%' }}>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}
