import * as React from 'react';
import { Link, PageProps } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const IndexPage: React.FC = () => {
	return <Layout>
		<SEO title='Home' />
		
	</Layout>
};

export default IndexPage;
