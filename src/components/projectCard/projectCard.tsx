import * as React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { IProjectInfo, projectMappings } from '@constants/projectMappings';
import { useMediaQuery } from 'react-responsive';
import {Icons} from '@types'

import '@styles/projectCard.css';

interface Props {
	image: IGatsbyImageData;
	base: string;
	icons: Icons;
}

const ProjectCard: React.FC<Props> = ({ icons, image, base }: Props) => {
	let projectInfo: IProjectInfo = projectMappings.find(
		(e) => e.base === base,
	);

	const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 1424 });

	return (
		<div
			className='card-container'
			style={
				projectInfo.isPronounced && isDesktopOrLaptop
					? {
							transform: 'scale(1.1)',
							margin: '20px',
					  }
					: {}
			}>
			<div className='card-image'>
				<GatsbyImage
					key={projectInfo.description}
					image={getImage(image)}
					alt={projectInfo.description}
					style={{
						width: '100%',
						height: '100%',
						borderRadius: '9px 9px 0px 0px',
					}}
				/>
			</div>
			<div className='card-text'>
				<div className='card-title-with-tags'>
					<h1 className='card-title'>{projectInfo.name}</h1>
					<h1 className='card-tags'>
						{projectInfo.displayTags.join(',')}
					</h1>
				</div>
				<div className='card-description-container'>
					<p className='card-description'>
						{projectInfo.description}
					</p>
				</div>
			</div>
			<div className='demo-github-links'>
				<a
					className='git-link'
					href={projectInfo.github}
					target='_blank'>
					<img
						width='30px'
						src={
							icons.allFile.nodes.find(
								(element) => element.name === 'git-white',
							).publicURL
						}
						className="demo-icon"
						alt='github repo link'
					/>
				</a>
				<a
					className='eye-link'
					href={projectInfo.demo}
					target='_blank'>
					<img
						width='30px'
						src={
							icons.allFile.nodes.find((element) =>
								projectInfo.demo
									? element.name === 'eye-white'
									: element.name === 'no-eye-white',
							).publicURL
						}
						style={
							projectInfo.demo
								? {}
								: {
										cursor: 'default',
										opacity: 0.5,
								  }
						}
						className="demo-icon"
						alt='project demo link'
					/>
				</a>
			</div>
		</div>
	);
};

export default ProjectCard;
