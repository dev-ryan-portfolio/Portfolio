import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

import Layout from '@components/common/defaultLayout';
import SEO from '@components/common/seo';
import '@styles/resume.css';
interface ResumeImage {
	allFile: {
		nodes: [{ childImageSharp: IGatsbyImageData; base: string }];
	};
}

const Resume: React.FC = () => {
	const data: ResumeImage = useStaticQuery(graphql`
    {
        allFile(
        filter: {relativeDirectory: {eq: "resume"}, base: {eq: "Resume.jpg"}}
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
	return (
		<Layout>
			<SEO title='Resume' />
			<GatsbyImage
				image={getImage(data.allFile.nodes[0].childImageSharp)}
				className='resume-img'
				alt='my resume'
			/>
		</Layout>
	);
};

export default Resume;
