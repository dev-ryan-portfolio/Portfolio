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
		hoveringList: {
			transform: 'scale(1.02)',
			boxShadow:
				'0px 0px 9px 5px rgba(0,0,0,0.4), 0px 0px 13px 10px rgba(0,0,0,0.3)',
			transition: 'transform 150ms linear, box-shadow 300ms'
		},
		notHoveringList: {
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
			position: 'absolute',
			right: 0,
			bottom: 0,
			padding: '0px 15px 1.2% 0px',
			display: 'flex',
			flexWrap: 'wrap',
			minWidth: '32px',
			width: '2%',
			maxWidth: '64px'
		},
		hoveringIcon: {
			transform: 'scale(1.25)',
			transition: 'transform 150ms ease-in'
		},
		notHoveringIcon: {
			transform: 'scale(1.00)',
			transition: 'transform 200ms linear'
		},
		link: {
			textDecoration: 'none'
		},
		listWrapper: {
			position: 'relative',
			padding: 2,
			margin: '2.5% 2% 1% 2.5%',
			width: '95%'
		}
	};

	const icons = (
		<div style={styles.icons}>
			<a
				style={{ padding: 5 }}
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
				style={{ padding: 5 }}
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
			style={styles.project}
			onMouseEnter={
				props.demo !== null || props.repo !== null
					? () => setHoveringList(true)
					: null
			}
			onMouseLeave={
				props.demo !== null || props.repo !== null
					? () => setHoveringList(false)
					: null
			}
		>
			{image}
			{description}
		</div>
	);

	const linkList = (
		<div
			style={
				hoveringList || hoveringDemo || hoveringRepo
					? { ...styles.listWrapper, ...styles.hoveringList }
					: { ...styles.listWrapper, ...styles.notHoveringList }
			}
			onMouseEnter={
				props.demo !== null || props.repo !== null
					? () => setHoveringList(true)
					: null
			}
			onMouseLeave={
				props.demo !== null || props.repo !== null
					? () => setHoveringList(false)
					: null
			}
		>
			<a
				style={styles.link}
				href={props.demo ? props.demo : props.repo && props.repo}
			>
				{list}
			</a>

			{icons}
		</div>
	);

	return linkList;
}
