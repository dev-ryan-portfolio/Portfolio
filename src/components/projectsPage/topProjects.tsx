import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import ProjectCard from '@components/ProjectCard/projectCard';

import {Icons} from '@types'
import '@styles/topProjects.css';

interface TopProjectsImages {
	allFile: {
		nodes: [{ childImageSharp: IGatsbyImageData; base: string }];
	};
}


interface Props {
}


const TopProjects: React.FC<Props> = (props: Props) => {
	const data: TopProjectsImages = useStaticQuery(graphql`
    {
        allFile(
        filter: {relativeDirectory: {eq: "projects"}, base: {in: ["chat-app-proj.png", "highlight-inator-proj.png", "losing-the-lyrics-proj.png"]}}
        sort: {fields: base}
        ) {
            nodes {
                childImageSharp {
                    gatsbyImageData(
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
                base
            }
        }
    }
    `);

	const images: JSX.Element[] = data.allFile.nodes.map(
		(e: { childImageSharp: IGatsbyImageData; base: string }, index: number) => {
			return (
				<ProjectCard
					image={getImage(e.childImageSharp)}
                    base={e.base}
                    key={e.base}
				/>
			);
		},
	);
	return <div className='top-projects-container'>{images}</div>;
};

export default TopProjects;
