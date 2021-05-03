import * as React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { useStaticQuery, graphql } from 'gatsby';
import { IProjectInfo, projectMappings } from '@constants/projectMappings';
import { useMediaQuery } from 'react-responsive';
import { Icons } from '@types';

import '@styles/projectCard.css';

interface Props {
	image: IGatsbyImageData;
	base: string;
}

const ProjectCard: React.FC<Props> = ({ image, base }: Props) => {
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
				<div className='demo-github-container'>
					<p className='demo-github-links'>
						Links:
						<a
							className='git-demo-link'
							href={projectInfo.github}
							target='_blank'>
							Github
						</a>
						{projectInfo.demo && (
							<>
								-
								<a
									className='git-demo-link'
									href={projectInfo.demo}
									target='_blank'>
									Demo
								</a>
							</>
						)}
					</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
