import React, { useState } from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function ProjectCard(props) {
	const [hovering, setHovering] = useState(false);

	const styles = {
		project: {
			display: 'inline-block',
			boxShadow:
				'-2px 2px 7px rgba(0,0,0,0.24), -4px 4px 9px rgba(0,0,0,0.19)',
			overflow: 'hidden',
			height: 'auto',
			width: '100%'
		},
		imageContainer: {
			margin: 5,
			float: 'left',
			height: 'auto',
			width: '10%'
		},
		image: {
			height: '100%',
			width: '100%',
			objectFit: 'contian'
		},
		description: {
			float: 'right',
			width: '85%',
			color: 'rgba(0,138,250, 1)',
			margin: 5,
			fontSize: '1vmax'
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

	const list = (
		<div
			style={
				hovering
					? { ...styles.project, ...styles.hovering }
					: { ...styles.project, ...styles.notHovering }
			}
			onMouseEnter={() => setHovering(true)}
			onMouseLeave={() => setHovering(false)}
		>
			<h1 style={styles.description}>{props.description}</h1>
			<div style={styles.imageContainer}>
				<img
					style={styles.image}
					src={require('../../Icons/' + props.image)}
					alt={props.alt}
					height="auto"
					width="auto"
				/>
			</div>
		</div>
	);

	const linkList = props.local ? (
		<Link
			style={{ textDecoration: 'none', margin: '2.5% 2.5% 0 2.5%', width: '95%' }}
			to={props.link}
		>
			{list}
		</Link>
	) : (
		<a
			style={{
				textDecoration: 'none',
				margin: '2.5%'
			}}
			href={props.link}
		>
			{list}
		</a>
	);

	return linkList;
}
