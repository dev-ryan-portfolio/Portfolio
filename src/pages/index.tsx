import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '@components/common/layout';
import SEO from '@components/common/seo';
import '@styles/index.css'

const IndexPage: React.FC = () => {
	return (
		<Layout>
			<SEO title='Home' />
			<h1>👋 I’m Ryan</h1>
            <h3>a full stack web developer</h3>
            <h3>with a lot of cards in my hand</h3>
		</Layout>
	);
};

export default IndexPage;
