import React, { useState } from 'react';
import View from '../../Icons/eye.svg';
import NoView from '../../Icons/no-eye.svg';
import GitBranch from '../../Icons/git.svg';

export default function ProjectCard(props) {
	const [hoveringList, setHoveringList] = useState(false);
	const [hoveringDemo, setHoveringDemo] = useState(false);
	const [hoveringRepo, setHoveringRepo] = useState(false);

	const styles = {
		project: {
			display: 'flex',
			boxShadow:
				'-2px 2px 7px rgba(0,0,0,0.24), -4px 4px 9px rgba(0,0,0,0.19)',
			overflow: 'hidden',
			height: '115px',
			width: '100%'
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
		image: {
			marginRight: '5px',
			maxWidth: '10%',
			minWidth: '100px',
			userSelect: 'none'
		},
		description: {
			color: 'rgba(0,138,250, 1)',
			overflow: 'hidden',
			fontSize: 'calc(0.4rem + 1.2vw + 2px)',
			width: '88%',
			textAlign: 'left'
		},
		icon: {
			minWidth: '24px',
			maxWidth: '32px',
			minHeight: '24px',
			maxHeight: '32px',
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
			margin: '15px 10px 10px 10px',
			display: 'flex',
			flexWrap: 'wrap',
			minWidth: '32px',
			width: '2%',
			maxWidth: '64px'
		},
		link: {
			textDecoration: 'none',
			margin: '2.5% 2% 1% 2.5%',
			width: '95%'
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
	const image = (
		<img
			style={styles.image}
			src={require('../../Icons/' + props.image)}
			alt={props.alt}
		/>
	);

	const description = (
		<h1 style={styles.description} title={props.description}>
			{props.description}
		</h1>
	);

	const list = (
		<div
			style={
				hoveringList
					? { ...styles.project, ...styles.hovering }
					: { ...styles.project, ...styles.notHovering }
			}
			onMouseEnter={
				(props.link !== null) | (props.repo !== null) &&
				(() => setHoveringList(true))
			}
			onMouseLeave={
				(props.link !== null) | (props.repo !== null) &&
				(() => setHoveringList(false))
			}
		>
			{image}
			{description}
			{icons}
		</div>
	);

	const linkList = (
		<a
			style={styles.link}
			href={props.link ? props.link : props.repo && props.repo}
		>
			{list}
		</a>
	);

	return linkList;
}
