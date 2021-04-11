import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '@components/common/layout';
import SEO from '@components/common/seo';

const Blog: React.FC = () => (
	<Layout>
		<SEO title='Blog' />
		<h1>Hi from the Blog page</h1>
		<p>Welcome to page 2</p>
		<Link to='/'>Go back to the homepage</Link>
	</Layout>
);

export default Blog;
