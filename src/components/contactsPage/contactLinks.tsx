import * as React from 'react';
import '@styles/contactLinks.css';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { contactIconToUrlMap } from '@constants/contactIconToUrlMap';

interface ContactIcons {
	allFile: {
		nodes: [
			{
				childImageSharp?: IGatsbyImageData;
				publicURL: string;
				name: string;
			},
		];
	};
}
interface Props {}

const contactLinks: React.FC<Props> = (props: Props) => {
	const contactIcons: ContactIcons = useStaticQuery(graphql`
    {
        allFile(
            filter: {relativeDirectory: {eq: "icons"}, base: {in: ["github-mark-white.svg", "gmail.svg", "linkedin.png"]}}
            sort: {fields: base}
        ) {
            nodes {
                childImageSharp {
                    gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
                }
                publicURL
                name
            }
        }
    }
    `);

	const getContactImage = (
		publicURL: string,
		childImageSharp?: IGatsbyImageData,
	): JSX.Element => {
		if (childImageSharp) {
			return (
				<GatsbyImage
					image={getImage(childImageSharp)}
					alt={publicURL}
				/>
			);
		}
		return <img src={publicURL} alt={publicURL} />;
	};

	const links: JSX.Element[] = contactIcons.allFile.nodes.map((e) => {
		return (
			<li className='contact-item'>
				<a
					className='contact-link'
					href={contactIconToUrlMap.get(e.name)}
					rel='noopener noreferrer'
					target='_blank'>
					{getContactImage(e.publicURL, e.childImageSharp)}
				</a>
			</li>
		);
	});
	return <ul className='contact-list'>{links}</ul>;
};

export default contactLinks;
