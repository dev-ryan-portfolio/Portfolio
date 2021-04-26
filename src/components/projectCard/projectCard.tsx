import * as React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import {IProjectInfo, projectMappings} from '@constants/projectMappings'

import '@styles/projectCard.css'

interface Props {
	image: IGatsbyImageData;
	base: string;
}

const ProjectCard: React.FC<Props> = ({image, base}: Props) => {
	let projectInfo: IProjectInfo = projectMappings.find(e => {
		
		console.log(e,base)
		return e.base === base
	})
	return (
		<div className='card-container'>
			<div className='card-image'>
				<GatsbyImage
					key={projectInfo.description}
					image={getImage(image)}
					alt={projectInfo.description}
				/>
			</div>
			<p>{projectInfo.description}</p>
			{projectInfo.displayTags.map(e => <p>{e}</p>)}
		</div>
	);
};

export default ProjectCard;
