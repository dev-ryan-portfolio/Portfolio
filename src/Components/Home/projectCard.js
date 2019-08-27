import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function ProjectCard(props) {
	const [hovering, setHovering] = useState(false);

	const styles = {
		project: {
			margin: 10,
			boxShadow:
				'-2px 2px 7px rgba(0,0,0,0.24), -4px 4px 9px rgba(0,0,0,0.19)',
			backgroundImage: `url('${require('../../Images/' + props.image)}')`,
			backgroundRepeat: 'no-repeat',
			backgroundSize: '100% 100%',
			overflow: 'hidden',
			maxHeight: '450px',
			maxWidth: '325px',
			minHeight: '276px',
			minWidth: '200px',
			height: '50vh',
			width: '19vw'
		},
		descriptionBackground: {
			background: 'rgba(0,0,0,0.85)',
			margin: '65% 2% 0px 2%',
			padding: '5px 0px 5px 0px'
		},
		description: {
			color: 'rgba(250, 250, 250, .98)',
			margin: 5,
			fontSize: '1.5vmax'
		},
		hovering: {
			transform: 'scale(1.02)',
			boxShadow:
				'0px 0px 9px 5px rgba(0,0,0,0.4), 0px 0px 13px 10px rgba(0,0,0,0.3)',
			transition: 'transform 150ms linear, box-shadow 300ms'
		},
		notHovering: {
			transform: 'scale(1)',
			boxShadow:
				'0px 0px 7px 2px rgba(0,0,0,0.24), 0px 0px 9px 4px rgba(0,0,0,0.19)',
			transition:
				'transform 150ms linear, width 100ms linear, box-shadow 200ms'
		}
	};

	const card = (
		<div
			style={
				hovering
					? { ...styles.project, ...styles.hovering }
					: { ...styles.project, ...styles.notHovering }
			}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			<div style={styles.descriptionBackground}>
				<h1 style={styles.description}>{props.description}</h1>
			</div>
		</div>
	);

	const linkCard = props.local ? (
		<Link style={{ textDecoration: 'none' }} to={props.link}>
			{card}
		</Link>
	) : (
		<a style={{ textDecoration: 'none' }} href={props.link}>
			{card}
		</a>
	);

	return linkCard;
}
