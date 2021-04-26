import * as React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { IProjectInfo, projectMappings } from '@constants/projectMappings';

import '@styles/projectCard.css';

interface Props {
	image: IGatsbyImageData;
	base: string;
}

const ProjectCard: React.FC<Props> = ({ image, base }: Props) => {
	let projectInfo: IProjectInfo = projectMappings.find(
		(e) => e.base === base,
	);
	return (
		<div
			className='card-container'
			style={
				projectInfo.isPronounced && {
					transform: 'scale(1.1)',
					margin: '20px',
				}
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
				<p className='card-description'>{projectInfo.description}</p>
				</div>
			</div>
		</div>
	);
};

export default ProjectCard;
