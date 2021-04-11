import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '@components/common/layout';
import SEO from '@components/common/seo';

const Projects: React.FC = () => (
	<Layout>
		<SEO title='Projects' />
		<h1>Hi from the Projects page</h1>
		<p>Welcome to page 2</p>
		<Link to='/'>Go back to the homepage</Link>
	</Layout>
);

export default Projects;
