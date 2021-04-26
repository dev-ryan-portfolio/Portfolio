import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

interface TopProjectsImages {
	allFile: {
		nodes: [IGatsbyImageData];
	};
}

interface Props {}

const TopProjects = (props: Props) => {
	const data: TopProjectsImages = useStaticQuery(graphql`
    {
        allFile(
        filter: {relativeDirectory: {eq: "projects"}, base: {in: ["chat-app-proj.png", "highlight-inator-proj.png", "losing-the-lyrics-proj.png"]}}
        ) {
            nodes {
                childImageSharp {
                    gatsbyImageData(
                        width: 200
                        placeholder: BLURRED
                        formats: [AUTO, WEBP, AVIF]
                    )
                }
            }
        }
    }
    `);

	const images: JSX.Element[] = data.allFile.nodes.map((e, index) => (
		<GatsbyImage
			image={getImage(e)}
			alt={`Project ${index} Showcase Image`}
		/>
	));
	return <div className="top-projects-contianer">{images}</div>;
};

export default TopProjects;
