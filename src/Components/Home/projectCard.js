import React, { useState } from 'react';
import View from '../../Icons/eye-white.svg';
import NoView from '../../Icons/no-eye-white.svg';
import GitBranch from '../../Icons/git-white.svg';

export default function ProjectCard(props) {
	const [hoveringCard, setHoveringCard] = useState(false);
	const [hoveringDemo, setHoveringDemo] = useState(false);
	const [hoveringRepo, setHoveringRepo] = useState(false);

	const styles = {
		project: {
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
		hoveringCard: {
			transform: 'scale(1.02)',
			boxShadow:
				'0px 0px 9px 5px rgba(0,0,0,0.4), 0px 0px 13px 10px rgba(0,0,0,0.3)',
			transition: 'transform 150ms linear, box-shadow 300ms'
		},
		notHoveringCard: {
			transform: 'scale(1)',
			boxShadow:
				'0px 0px 7px 2px rgba(0,0,0,0.24), 0px 0px 9px 4px rgba(0,0,0,0.19)',
			transition:
				'transform 150ms linear, width 100ms linear, box-shadow 200ms'
		},
		icon: {
			flexGrow: 1,
			margin: '0 5px 0 10px',
			minWidth: '32px',
			maxWidth: '48px',
			height: '10%',
			minHeight: '32px',
			maxHeight: '48px',
			userSelect: 'none',
			padding: 5,
			border: 'none',
			borderRadius: '100%'
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
			position: 'absolute',
			bottom: 0,
			right: '1%',
			width: '100%',
			margin: '0px 2% 0px 0px',
			padding: '0px 2px 0px 0px',
			height: 'auto',
			display: 'flex',
			justifyContent: 'flex-end',
			minWidth: '32px'
		},
		hoveringIcon: {
			backgroundColor: 'rgba(244,244,244,0.24)',
			transition: 'background-color 200ms linear'
		},
		notHoveringIcon: {
			backgroundColor: 'rgba(255,255,255,0)',
			transition: 'background-color 200ms linear'
		},
		cardWrapper: {
			position: 'relative',
			textDecoration: 'none',
			margin: 10,
			padding: 2
		}
	};

	const icons = (
		<div style={styles.icons}>
			<a
				href={props.demo && props.demo}
				target="_self"
				rel="noopener noreferrer"
			>
				<img
					style={
						props.demo
							? hoveringDemo
								? {
										...styles.icon,
										...styles.iconActive,
										...styles.hoveringIcon
								  }
								: {
										...styles.icon,
										...styles.iconActive,
										...styles.notHoveringIcon
								  }
							: { ...styles.icon, ...styles.iconDisabled }
					}
					onMouseEnter={props.demo && (() => setHoveringDemo(true))}
					onMouseLeave={props.demo && (() => setHoveringDemo(false))}
					src={props.demo ? View : NoView}
					alt={props.demo ? 'View Project' : 'No Demo Available'}
					title={props.demo ? 'View Project' : 'No Demo Available'}
				/>
			</a>
			<a
				href={props.repo && props.repo}
				target="_blank"
				rel="noopener noreferrer"
			>
				<img
					style={
						props.repo
							? hoveringRepo
								? {
										...styles.icon,
										...styles.iconActive,
										...styles.hoveringIcon
								  }
								: {
										...styles.icon,
										...styles.iconActive,
										...styles.notHoveringIcon
								  }
							: { ...styles.icon, ...styles.iconDisabled }
					}
					onMouseEnter={props.repo && (() => setHoveringRepo(true))}
					onMouseLeave={props.repo && (() => setHoveringRepo(false))}
					src={GitBranch}
					alt={props.repo ? 'View Repo' : 'No Repo Available'}
					title={props.repo ? 'View Repo' : 'No Repo Available'}
				/>
			</a>
		</div>
	);

	const card = (
		<div style={styles.project}>
			<div style={styles.descriptionBackground}>
				<h1 style={styles.description}>{props.description}</h1>
			</div>
		</div>
	);

	const linkCard = (
		<div
			style={
				hoveringCard || hoveringDemo || hoveringRepo
					? { ...styles.cardWrapper, ...styles.hoveringCard }
					: { ...styles.cardWrapper, ...styles.notHoveringCard }
			}
			onMouseEnter={
				props.demo !== null || props.repo !== null
					? () => setHoveringCard(true)
					: null
			}
			onMouseLeave={
				props.demo !== null || props.repo !== null
					? () => setHoveringCard(false)
					: null
			}
		>
			<a href={props.demo ? props.demo : props.repo && props.repo}>
				{card}
			</a>

			{icons}
		</div>
	);

	return linkCard;
}
