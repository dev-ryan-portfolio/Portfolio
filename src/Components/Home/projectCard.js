import React, { useState } from 'react';
import View from '../../Icons/eye-white.svg';
import NoView from '../../Icons/no-eye-white.svg';
import GitBranch from '../../Icons/git-white.svg';

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
			width: '19vw',
			position: 'relative'
		},
		descriptionBackground: {
			position: 'absolute',
			bottom: '0px',
			background: 'rgba(0,0,0,0.85)',
			margin: '0 2% 2% 2%',
			padding: '5px 0px 5px 0px',
			height: '50%'
		},
		description: {
			margin: 0,
			color: 'rgba(250, 250, 250, .98)',
			fontSize: 'calc(0.3em + 1vw + 8px)',
			overflow: 'hidden',
			height: '78%'
			
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
		},
		icon: {
			flexGrow: 1,
			margin: '0 10px 0 10px',
			minWidth: '32px',
			maxWidth: '48px',
			height: '10%',
			minHeight: '32px',
			maxHeight: '48px',
			userSelect: 'none'
		},
		iconActive: {
			cursor: 'pointer',
			opactiy: 1
		},
		iconDisabled: {
			cursor: 'default',
			opacity: 0.5
		},
		icons: {
			width: '95%',
			height:'22%',
			margin: '5px 10px 5px 10px',
			display: 'flex',
			justifyContent: 'flex-end',
			minWidth: '32px',
		}
	};

	const icons = (
		<div style={styles.icons}>
			<a
				style={{ padding: 2 }}
				href={props.link && props.link}
				target="_self"
				rel="noopener noreferrer"
			>
				<img
					style={
						props.link
							? { ...styles.icon, ...styles.iconActive }
							: { ...styles.icon, ...styles.iconDisabled }
					}
					src={props.link ? View : NoView}
					alt={props.link ? 'View Project' : 'No Demo Available'}
					title={props.link ? 'View Project' : 'No Demo Available'}
				/>
			</a>
			<a
				style={{ padding: 2 }}
				href={props.repo && props.repo}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					style={
						props.repo
							? { ...styles.icon, ...styles.iconActive }
							: { ...styles.icon, ...styles.iconDisabled }
					}
					src={GitBranch}
					alt={props.repo ? 'View Repo' : 'No Repo Available'}
					title={props.repo ? 'View Repo' : 'No Repo Available'}
				/>
			</a>
		</div>
	);

	const card = (
		<div
			style={
				hovering
					? { ...styles.project, ...styles.hovering }
					: { ...styles.project, ...styles.notHovering }
			}
			onMouseEnter={
				(props.link !== null) | (props.repo !== null) &&
				(() => setHovering(true))
			}
			onMouseLeave={
				(props.link !== null) | (props.repo !== null) &&
				(() => setHovering(false))
			}
		>
			<div style={styles.descriptionBackground}>
				<h1 style={styles.description}>{props.description}</h1>
				{icons}
			</div>
		</div>
	);

	const linkCard = (
		<a
			style={{ textDecoration: 'none' }}
			href={props.link ? props.link : props.repo && props.repo}
		>
			{card}
		</a>
	);

	return linkCard;
}
