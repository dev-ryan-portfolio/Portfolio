import * as React from 'react';
import { Link } from 'gatsby';

import Layout from '@components/common/defaultLayout';
import SEO from '@components/common/seo';

const Contact: React.FC = () => (
	<Layout>
		<SEO title='Contact' />
		<h1>Hi from the Contact page</h1>
		<p>Welcome to page 2</p>
		<Link to='/'>Go back to the homepage</Link>
	</Layout>
);

export default Contact;
