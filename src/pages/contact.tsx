import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

import Layout from '@components/common/defaultLayout';
import SEO from '@components/common/seo';

import '@styles/contact.css';
import ContactLinks from '@components/contactsPage/contactLinks';

interface Avatar {
	allFile: {
		nodes: [{ childImageSharp: IGatsbyImageData }];
	};
}
const Contact: React.FC = () => {
	const avatar: Avatar = useStaticQuery(graphql`
    {
      allFile(
        filter: {relativeDirectory: {eq: "avatar"}, base: {eq: "bitmojipfp.png"}}
      ) {
        nodes {
          childImageSharp {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
          }
        }
      }
    }
  `);
	return (
		<Layout>
			<SEO title='Contact' />
			<div className='contact-container'>
				<GatsbyImage
					image={getImage(avatar.allFile.nodes[0].childImageSharp)}
					alt='bitmoji avatar'
				/>
				<ContactLinks/>
			</div>
		</Layout>
	);
};

export default Contact;
